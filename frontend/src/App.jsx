import { useState, useEffect } from "react";
import Course from "./components/Course";
import courseService from "./services/courses";
import loginService from "./services/login";
import LoginForm from "./components/LoginForm";
import CreateUser from "./components/CreateUserForm";


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

  const handleCreateUser = (newUser) => {
    loginService
      .createUser(newUser)
      .then((returnedUser) => {
        setUser(returnedUser)
      })
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
    <div>
      <h2>The Directory</h2>
      {user === null ? (
        // Show login and create user forms when no user is logged in
        <div>
          <div className="auth-forms">
            {loginForm()}
            {createNewUser()}
          </div>
        </div>
      ) : (
        // Show user content when logged in
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