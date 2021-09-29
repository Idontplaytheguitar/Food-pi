import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/CardHome.module.css'

export function CardHome({image,title,diets,id}) {

  //console.log(title)
  //console.log(image)
  //console.log(diets)

  return (
    <Link to={`/home/recipe/${id}`}>
    <div className={styles.CardHome}>
      <img src={image} alt={title} className={styles.imagen}/>
      <h3>{title}</h3>
      <p>{diets}</p>
    </div>
    </Link>
  )
      
  
  
};

export default CardHome;