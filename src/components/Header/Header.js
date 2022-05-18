import React from 'react'
import ReactDOM from "react-dom"
import { Link } from 'react-router-dom'
import './Heade.css'
export default function Header() {
  const logged = false
  return (
    <div className="header">
      <h1>История</h1>
      {
        logged ? <div className='login_name'>
          <p>Zubova Natalia </p>
          <span className='header_btn'>Выйти</span>
        </div> : <span className='header_btn' ><Link to='/auth/login' >Войти</Link></span>
      }
    </div>
  )
}
