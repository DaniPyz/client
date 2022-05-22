import axiosClient from "../../utils/axios"
import Cookies from 'js-cookie';
export function register({ email, username, password }) {
  return axiosClient.post('https://history-server123123.herokuapp.com/api/auth/signup', { email, username, password })
}
export const axiosUserVerifySignIn = ({ token }) => {
  return (dispatch) => {

    axiosClient
      .post('https://history-server123123.herokuapp.com/api/auth/verify', { token })
      .then(res => {
        dispatch(UserSignIn(res.data))


      })
      .catch(err => console.log(err))
  }

};

export const axiosUserSignIn = ({ username, password }) => {

  return (dispatch) => {

    axiosClient
      .post('https://history-server123123.herokuapp.com/api/auth/signin', { username, password })
      .then(res => {
        dispatch(UserSignIn(res.data))
        console.log(res)
        // window.location.reload()
      })
      .catch(err => console.log(err))
  }

};
export const axiosUserLogOut = () => {
  return (dispatch) => {

    axiosClient
      .post('https://history-server123123.herokuapp.com/api/auth/signout',)
      .then(res => {
        // dispatch(UserSignIn({ id: null, username: null, email: null, roles: [], isLogin: false}))
        Cookies.remove('dapy-session')
      })
      .catch(err => console.log(err))
  }

};
const UserSignIn = ({ id, username, email, roles }) => {

  return {
    type: "USER_SIGNIN",
    payload: {
      id,
      username,
      email,
      roles,
      isLogin: true
    }
  }
}

// export const fetchProducts = () => { ... };