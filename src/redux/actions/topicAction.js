import axiosClient from "../../utils/axios"

export const axiosGetTopics = () => {
  return (dispatch) => {

    axiosClient
      .get('https://server-dapy.vercel.app/api/test/user')
      .then(res => {
        dispatch(getTopics(res.data))
      })
      .catch(err => console.log(err))
  }

};
export const axiosPostTopic = ({title, content}) => {
  return (dispatch) => {

    axiosClient
      .post('https://server-dapy.vercel.app/api/postTopic', { title, content })
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