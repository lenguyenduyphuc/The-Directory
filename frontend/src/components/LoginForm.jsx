import { useState } from 'react'

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
    <div>
      <h2>Chào mừng đến với the Directory</h2>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input
            type="text"
            value={newUsername}
            name="Username"
            onChange={(event) => setNewUsername(event.target.value)}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={newPassword}
            name="Password"
            onChange={(event) => setNewPassword(event.target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default LoginForm