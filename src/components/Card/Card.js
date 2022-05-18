import React from 'react';
import './Card.css'
function Card({ title, content }) {
  return (
    <div className='content_block'>
      <h1 className='h1_title'>{title}</h1>
      <p className='p_preview'>{content}</p>
      <a href="s" className='btn'>Читать</a>
    </div>
  );
}

export default Card;