import { useState } from 'react'
import './CreateUserForm.css'

const CreateUserForm = ({ createUser }) => {
  const [newUsername, setNewUsername] = useState('')
  const [newName, setNewName] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const addUser = (event) => {
    event.preventDefault()
      createUser({
        username: newUsername,
        name: newName,
        password: newPassword,
      })

      setNewUsername('')
      setNewName('')
      setNewPassword('')
  }

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Đăng kí cho The Directory</h2>
        <form onSubmit={addUser} className="signup-form">
          <div className="form-group">
            <label htmlFor="signup-username">Username</label>
            <input
              id="signup-username"
              type="text"
              value={newUsername}
              name="Username"
              onChange={(event) => setNewUsername(event.target.value)}
              placeholder="Choose a username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="signup-name">Name</label>
            <input
              id="signup-name"
              type="text"
              value={newName}
              name="Name"
              onChange={(event) => setNewName(event.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="signup-password">Password</label>
            <input
              id="signup-password"
              type="password"
              value={newPassword}
              name="Password"
              onChange={(event) => setNewPassword(event.target.value)}
              placeholder="Create a password"
              required
            />
          </div>
          <button type="submit" className="signup-button">
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateUserForm
