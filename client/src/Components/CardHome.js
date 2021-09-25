import React from 'react';
// import { Link } from 'react-router-dom';

export function CardHome({cards}
                        , loading
                        ) {

  
  if(loading === 'Si'){
    return(
      <h3>Loading...</h3>
    )
  }
  console.log(loading)
  console.log(cards)

  return (
    <div>
     hola
    </div>
  )
      
  
  
};

export default CardHome;