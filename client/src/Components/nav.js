import React from 'react';
import { Link } from 'react-router-dom';
import { searchByTitle } from '../Redux/actions';
import {connect} from 'react-redux'
import styles from './styles/Nav.module.css'


export function Nav(searchByTitle) {
  return (
    <div className={styles.Nav}>
      <div>
        <Link to="/home">Home</Link>
      </div>
      <div>
        <form onSubmit={(e)=> searchByTitle(e)}>
        <input type='text'/>
        <button>Buscar</button>
        </form>
      </div>
      <div>
        <Link to="/home/add">Add Recipe</Link>
      </div>
    </div>
  )
};

export default connect(null,{searchByTitle})(Nav)