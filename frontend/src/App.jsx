import { useState, useEffect } from "react";
import Course from "./components/Course";
import courseService from "./services/courses";
import loginService from "./services/login";
import LoginForm from "./components/LoginForm";



const App = () => {
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    courseService.getAll().then((courses) => {
      setCourses(courses);
    });
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser') 
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      courseService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (credentials) => {
    try {
      const user = await loginService.login(credentials)
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      courseService.setToken(user.token)
      setUser(user)
    } catch (exception) {
      console.log('Wrong credentials')
    }
  }

  const handleLogout = async (event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedUser')
    setUser(null)
  }

  const loginForm = () => {
    return (
      <div>
        <LoginForm createLogin={handleLogin} />
      </div>
    )
  }

  const logoutForm = () => (
    <form onSubmit={handleLogout}>
      <button type="submit">Logout</button>
    </form>
  )



  return (
    <div>
      <h2>The Directory</h2>
      {user === null ?
        loginForm() :
        <div>
          <p>{user.name} log in </p>
          {logoutForm()}
          <Course courses={courses}/>
        </div>
      }
    </div>
  )
}

export default App