import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import AuthPopUp from './components/AuthPopUp/AuthPopUp'
import { getAll } from './utils/api';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import CardAdd from './components/CardAdd/CardAdd'
import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { axiosUserSignIn, axiosUserVerifySignIn } from './redux/actions/userAction'
import { axiosGetTopics } from './redux/actions/topicAction'
import Cookies from 'js-cookie';
import Reader from "./components/Reader/Reader";
import { useLocation } from 'react-router-dom'

function App() {

  const dispatch = useDispatch();
 
  
  useEffect(() => {
    if (Cookies.get('dapy-session')) {
      dispatch(axiosUserVerifySignIn({ token: Cookies.get('dapy-session') }))
      dispatch(axiosGetTopics())
    }
    
  }, [dispatch]);
  const user = useSelector(state => state.user);
  const topics = useSelector(state => state.topics);
  const location = useLocation();
  return (
    <div >
      <Routes>
        <Route path="/" element={
          <>
            <Header userName={user.username} isLogin={user.isLogin} />
            <div className="main">

              {topics !== null ? topics.items.map(topic => <Card key={topic.content + topic._id} content={topic.content} title={topic.title} id={topic._id} />) : null}
              {
                user.isLogin && user.roles.length >=2  ? <CardAdd /> : null
              }
              
            </div>
          </>
        } />
        <Route path="/auth/login" element={<AuthPopUp isLogin={true} />} />
        <Route path="/auth/register" element={<AuthPopUp isLogin={false} />} />
        {

          topics.items.map(el => <Route path={`/post/${el._id}`} element={<Reader id={el._id} title={el.title} content={el.content} />} />)
       }
      </Routes>
    </div>
  );
}

export default App;
