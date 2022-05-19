import React, { useState } from 'react';
import './Reader.css'

function Reader({ id, title, content }) {
  
 
  return (
    <div className='Reader'>
      
      <h1>{title}</h1>
      <p>{content}</p>
     
    </div>
  );
}

export default Reader;