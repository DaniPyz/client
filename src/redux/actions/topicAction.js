import axiosClient from "../../utils/axios"

export const axiosGetTopics = () => {
  return (dispatch) => {

    axiosClient
      .get('http://178.168.81.20:3001/api/test/user')
      .then(res => {
        dispatch(getTopics(res.data))
      })
      .catch(err => console.log(err))
  }

};
export const axiosPostTopic = ({ title, content }) => {
  return (dispatch) => {

    axiosClient
      .post('http://178.168.81.20:3001/api/postTopic', { title, content })
      .then(res => {

        dispatch(axiosGetTopics())
      })
      .catch(err => console.log(err))
  }

};
const getTopics = (prop) => {

  return {
    type: "GET_TOPICS",
    prop

  }
}

// export const fetchProducts = () => { ... };