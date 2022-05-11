
import './App.css';
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
    (async () => {
      const logEntries = await getAll().then(res => res.data)
      setTopics(logEntries);
    })()
  }
  const [Topics, setTopics] = useState(null);
  return (
    <>
      <Header />
      <div className="main">

        {
    
          Topics !== null ? Topics.map(topic => <Card  {...topic} />)   : null
        }
        
        <CardAdd update={changeState()} />
      </div>
    </>
  );
}

export default App;
