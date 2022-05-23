import axios from 'axios';
const axiosClient = axios.create({
  headers: {
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'https://history-server123123.herokuapp.com',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  crossDomain: true,

});
export default axiosClient;
