import axiosClient from "./axios"


// export function getAll() {
//   return axiosClient.get('http://localhost:3001/api/test/user')
// }
export function postTopic({title, content}) {
  return axiosClient.post('https://history-server123123.herokuapp.com/postTopic', { title, content})
}
export function register({email,  username, password }) {
  return axiosClient.post('https://history-server123123.herokuapp.com/api/auth/signup', { email, username,password })
}
// export function login({ username, password }) {
//   return axiosClient.post('http://localhost:3001/api/auth/signin', { username, password })
// }