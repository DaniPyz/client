import axios from 'axios';
const axiosClient = axios.create({
  baseURL: `https://client-dapy.vercel.app`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*'
  },
  credentials: 'same-origin',


});
axiosClient.defaults.withCredentials = false
export default axiosClient;
