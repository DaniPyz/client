import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { register, login } from '../../utils/api';
import './AuthPopUp.css'
import { useNavigate } from 'react-router';
import { axiosUserSignIn } from '../../redux/actions/userAction'
import {useDispatch} from 'react-redux'
function AuthPopUp({ isLogin }) {
  
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState({
    email: '',
    password: '',
    username: ''
  })
  let navigate = useNavigate();
  const onLoginSubmit = (ev) => {
    console.log('Запрос отправлен ')
    dispatch(axiosUserSignIn({ username: inputData.username, password: inputData.password }))
    navigate("/", { replace: true })
    
  }
  const onRegisterSubmit = (ev) => {
      register(inputData)
  }
  return (
    <div className='authPopUp'>
      {
        isLogin ? <h1>Войти</h1> : <h1>Регистрация</h1>
      }
      {
        !isLogin ? <input placeholder='Введи почту' value={inputData.email} onChange={(ev) => {
          setInputData({
            ...inputData,
            email: ev.target.value

          })

        }} type='email' /> : null
      }
      
      <input placeholder='Введи ник' value={inputData.username} onChange={(ev) => {
        setInputData({
          ...inputData,
          username: ev.target.value

        })

      }} type='name' />
      <input placeholder='Введи пароль' value={inputData.password} onChange={(ev) => {
        setInputData({
          ...inputData,
          password: ev.target.value
        })
      }} type='password' />
      {
        isLogin ? <button onClick={onLoginSubmit} >Войти</button> : <button onClick={onRegisterSubmit}>Регистрация</button>
      }
      
      {
        isLogin ? <Link to="/auth/register">Регистрация</Link> : <Link to="/auth/login">Вход</Link>
      }
     
    </div>
  );
}

export default AuthPopUp;