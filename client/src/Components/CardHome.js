import React from 'react';
import { Link } from 'react-router-dom';

export function CardHome({image,name,dietTypes}) {
  return (
    <div>
        <p>{name}</p>
        <p>{dietTypes}</p>
        <img src={image}></img>
    </div>
  )
};

export default CardHome;