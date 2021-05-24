import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-marvel-fortbrasil.herokuapp.com/'
})

export default api;