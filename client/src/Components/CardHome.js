import React from 'react';
import { Link } from 'react-router-dom';

export function CardHome({Cards, loading}) {
  console.log(Cards.data)
  for(let i in Cards.data){
    console.log(i.title)
  }
  if(loading){
    return(
      <h3>Loading...</h3>
    )
  }
  return (
    <ul>
     {/*  {cards.data.forEach(card=>{
        <li key={card.id}>
          <img src={card.image}/>
          <p>{card.title}</p>
          <p>{card.dietType}</p>
        </li>
      })} */}
    </ul>
  )
  
};

export default CardHome;