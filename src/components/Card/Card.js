import React from 'react';
import './Card.css'
import {Link } from "react-router-dom";

function Card({ title, content, id }) {
  return (
    <div className='content_block'>
      <h1 className='h1_title'>{title}</h1>
      <p className='p_preview'>{content}</p>
      <Link to={`/post/${id}`} className='btn' >Читать</Link>
    </div>
  );
}

export default Card;