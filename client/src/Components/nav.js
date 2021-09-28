import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Nav.module.css'


export function Nav() {
  return (
    <div className={styles.Nav}>
      <div>
        <Link to="/home">Home</Link>
      </div>
      <div>
        <label>Buscar</label>
        <input type='text'/>
      </div>
      <div>
        <Link to="/home/add">Add Recipe</Link>
      </div>
    </div>
  )
};

export default Nav;