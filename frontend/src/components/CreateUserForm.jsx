import { useState } from 'react'

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
    <div>
      <h2>Sign up for the Directory</h2>
      <form onSubmit={addUser}>
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
          name
          <input
            type="text"
            value={newName}
            name="Name"
            onChange={(event) => setNewName(event.target.value)}
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
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default CreateUserForm

