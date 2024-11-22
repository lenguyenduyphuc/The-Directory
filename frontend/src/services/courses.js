import axios from 'axios';
const baseUrl = '/api/courses';

let token = null
let config 

const setToken = newToken => { 
  token = `Bearer ${newToken}`
  config = {
    headers: { Authorization: token },
  }
}

const getAll =  () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data)
}



export default { getAll, setToken };