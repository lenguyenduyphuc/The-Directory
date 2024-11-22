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

const update = async (courseId, updatedPart) => {
  const response = await axios.put(
    `${baseUrl}/${courseId}/${updatedPart._id}`, 
    updatedPart, 
    config
  );
  return response.data;
};

export default { getAll, setToken, update };