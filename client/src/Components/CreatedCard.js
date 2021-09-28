import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/CardHome.module.css'

export function CreatedCard({healthy,title,summary,id}) {



  return (
    <Link to={`/home/${id}`}>
    <div className={styles.CardHome}>
      <h3>{title}</h3>
      <p>Es sana? {healthy? 'si':'no'} </p>
      <h4>Resumen:</h4>
      <p>{summary}</p>
    </div>
    </Link>
  )
      
  
  
};

export default CreatedCard;