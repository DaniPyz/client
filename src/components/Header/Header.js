import React from 'react'
import ReactDOM from "react-dom"
import { Link } from 'react-router-dom'
import './Heade.css'
import { useDispatch } from 'react-redux'
import { axiosUserLogOut } from '../../redux/actions/userAction'

export default function Header({ userName, isLogin }) {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <h1>История</h1>
      {
        isLogin ? <div className='login_name'>
          <p>{userName} </p>
          <span className='header_btn' onClick={ev => {
            dispatch(axiosUserLogOut())
            // eslint-disable-next-line no-restricted-globals
            location.reload();
          }}>Выйти</span>
        </div> : <span className='header_btn' ><Link to='/auth/login' >Войти</Link></span>
      }
    </div>
  )
}
