import axios from 'axios';
const axiosClient = axios.create({
  baseURL: `https://client-dapy.vercel.app`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  credentials: 'same-origin',
  

});
axiosClient.defaults.withCredentials = true
export default axiosClient;
