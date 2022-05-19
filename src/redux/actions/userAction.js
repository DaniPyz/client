import axiosClient from "../../utils/axios"
import Cookies from 'js-cookie';
export function register({ email, username, password }) {
  return axiosClient.post('http://localhost:3001/api/auth/signup', { email, username, password })
}
export const axiosUserVerifySignIn = ({ token }) => {
  return (dispatch) => {

    axiosClient
      .post('http://localhost:3001/api/auth/verify', { token })
      .then(res => {
        dispatch(UserSignIn(res.data))
      

      })
      .catch(err => console.log(err))
  }

};

export const axiosUserSignIn = ({ username, password}) => {
  // const [cookies, setCookie] = useCookies(['name']);
  return (dispatch) => {

    axiosClient
      .post('http://localhost:3001/api/auth/signin', { username,password })
      .then(res => {
        dispatch(UserSignIn(res.data))
        window.location.reload()
      })
      .catch(err => console.log(err))
  }

};
export const axiosUserLogOut = () => {
  return (dispatch) => {

    axiosClient
      .post('http://localhost:3001/api/auth/signout',)
      .then(res => {
        // dispatch(UserSignIn({ id: null, username: null, email: null, roles: [], isLogin: false}))
        Cookies.remove('dapy-session')
      })
      .catch(err => console.log(err))
  }

};
const UserSignIn = ({id,username, email, roles}) => {

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