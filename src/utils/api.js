import axiosClient from "./axios"


export function getAll() {
  return axiosClient.get('http://localhost:3001/getAll')
}
export function postTopic({title, content}) {
  return axiosClient.post('http://localhost:3001/postTopic', { title, content})
}