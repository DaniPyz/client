import axios from 'axios';
const axiosClient = axios.create({
  baseURL: `https://history-server123123.herokuapp.com`,
  headers: {
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  crossDomain: true,

});
export default axiosClient;
