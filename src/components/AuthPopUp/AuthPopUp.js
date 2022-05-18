import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { register, login } from '../../utils/api';
import './AuthPopUp.css'
import { useNavigate } from 'react-router';
function AuthPopUp({isLogin}) {
  const [inputData, setInputData] = useState({
    email:undefined,
    password: undefined,
    username: undefined
  })
  let navigate = useNavigate();
  const onLoginSubmit = async (ev) => {
    const data = await login(inputData)
    data ? navigate("/", { replace: true }) : console.log("Произошла ошибка")
    
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