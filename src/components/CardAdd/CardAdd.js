import React, { useState } from 'react';
import { postTopic } from '../../utils/api'
import './CardAdd.css'
import { useSelector, useDispatch } from "react-redux";
import { axiosPostTopic} from '../../redux/actions/topicAction'
function CardAdd() {
  const [isVisible, setIsVisible] = useState()
  const [data, setData] = useState({
    title: '',
    content: ''
  })
  const dispatch = useDispatch();

  return (
    <div className='create_block'>

      {
        isVisible ? <>
          <input className='input_tittle' value={data.title} placeholder='Введи заголовок' onChange={(ev) => setData({ ...data, title: ev.target.value })} />
          <textarea className='input_p' value={data.content} placeholder='Введи основную информацию' onChange={(ev) => setData({ ...data, content: ev.target.value })}></textarea>
          <a href="s" className='btn add_btn' onClick={e => {
            e.preventDefault()
            dispatch(axiosPostTopic({ title: data.title, content: data.content}))
          }} >Добавить</a>
        </> :
          <div onClick={() => {
            setIsVisible(true)


          }}>
            <svg viewBox="0 0 24 24" width="100" height="100" stroke="#acb4fb" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          </div>





      }
    </div>
  );
}

export default CardAdd;