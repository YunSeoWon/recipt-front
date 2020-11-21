import axios from "axios"

const ReciptApi = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': window.location.origin
  }
})

export default ReciptApi;
