import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import AuthPopUp from './components/AuthPopUp/AuthPopUp'
import { getAll } from './utils/api';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import CardAdd from './components/CardAdd/CardAdd'
import React, { useEffect, useState } from 'react'
function App() {
  useEffect(() => {
    (async () => {
      const logEntries = await getAll().then(res => res.data)
      setTopics(logEntries);
    })()


    return () => {

    }
  }, [])
  const changeState = () => {
    // (async () => {
    //   const logEntries = await getAll().then(res => res.data)
    //   setTopics(logEntries);
    // })()
  }
  const [Topics, setTopics] = useState(null);
  return (
    <div >
      <Routes>
        <Route path="/" element={
          <>
            <Header /><div className="main">

            {Topics !== null ? Topics.map(topic => <Card key={topic.title} {...topic} />) : null}

            <CardAdd update={changeState()} />
            </div>
          </>
        } />
        <Route path="/auth/login" element={<AuthPopUp isLogin={true}  />} />
        <Route path="/auth/register" element={<AuthPopUp isLogin={false} />} />
      </Routes>
    </div>
  );
}

export default App;
