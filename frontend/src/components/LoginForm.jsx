import { useState } from 'react'
import './LoginForm.css'

const LoginForm = ({ createLogin }) => {
  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    createLogin({
      username: newUsername,
      password: newPassword,
    })
    
    setNewUsername('')
    setNewPassword('')
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Chào mừng đến với the Directory</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={newUsername}
              name="Username"
              onChange={(event) => setNewUsername(event.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={newPassword}
              name="Password"
              onChange={(event) => setNewPassword(event.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm