import { useState, useEffect } from "react";
import Course from "./components/Course";
import courseService from "./services/courses";
import loginService from "./services/login";
import LoginForm from "./components/LoginForm";
import CreateUser from "./components/CreateUserForm";
import './App.css'

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

  const handleCreateUser = async (newUser) => {
    try {
      const returnedUser = await loginService.create(newUser)
      setUser(returnedUser)
    } catch (error) {
      console.log('Error creating user', error)
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

  const createNewUser = () => {
    return (
      <div>
        <CreateUser createUser = {handleCreateUser}/>
      </div>
    )
  }



  return (
    <div className="app-background">
      {user === null ? (
        <div>
          <div className="auth-forms">
            {loginForm()}
            {createNewUser()}
          </div>
        </div>
      ) : (
        <div>
          <div className="user-header">
            <p>{user.name} log in</p>
            {logoutForm()}
          </div>
          <Course courses={courses}/>
        </div>
      )}
    </div>
  );
}

export default App