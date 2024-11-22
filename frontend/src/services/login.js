import axios from 'axios'

const login = async credentials => {
  const response = await axios.post('/api/login', credentials)
  return response.data
}

const create = async newUser => {
  const response = await axios.post('/api/users', newUser)
  return response.data
}

export default { login, create }