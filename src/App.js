import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import AuthPopUp from './components/AuthPopUp/AuthPopUp'
import { getAll } from './utils/api';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import CardAdd from './components/CardAdd/CardAdd'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {  axiosUserVerifySignIn } from './redux/actions/userAction'
import { axiosGetTopics } from './redux/actions/topicAction'
import Reader from "./components/Reader/Reader";
import {  useNavigate } from 'react-router-dom'
import Base from "./components/Base";

function App() {

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const user = useSelector(state => state.user);
  const topics = useSelector(state => state.topics);
  
  useEffect(() => {
    if (!user.isLogin) {
      dispatch(axiosUserVerifySignIn())
      navigate("/")
      dispatch(axiosGetTopics())
    }
  }, []);

  return (
    <div>
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
        <Route path="/default" exact element={<Base />} />
        <Route path="/auth/login" element={<AuthPopUp isLogin={true} />} />
        <Route path="/auth/register" element={<AuthPopUp isLogin={false} />} />
        {

          topics.items.map(el => <Route path={`/post/${el._id}`} key={el._id} element={<Reader id={el._id} title={el.title} content={el.content} />} />)
       }
      </Routes>
    </div>
  );
}

export default App;
