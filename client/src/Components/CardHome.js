import React from 'react';
// import { Link } from 'react-router-dom';

export function CardHome({image,title,dietTypes}) {

  //console.log(title)
  //console.log(image)
  //console.log(dietTypes)

  return (
    <div>
     <img src={image} alt={title}/>
     <h3>{title}</h3>
     <p>{dietTypes}</p>
    </div>
  )
      
  
  
};

export default CardHome;