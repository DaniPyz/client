import axios from 'axios';
const axiosClient = axios.create({
  baseURL: `https://history-server123123.herokuapp.com`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*'
  },
  credentials: 'same-origin',


});
axiosClient.defaults.withCredentials = false
export default axiosClient;
