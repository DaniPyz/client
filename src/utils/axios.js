import axios from 'axios';
const axiosClient = axios.create({
  baseURL: `https://history-server123123.herokuapp.com`,
  headers: {
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Set-Cookie'
  },
  credentials: 'same-origin',
  crossDomain: true


});
export default axiosClient;
