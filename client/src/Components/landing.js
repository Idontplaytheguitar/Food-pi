import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/landing.module.css'

export function Landing() {
  return (
    <div className={styles.Landing}>  
            <Link to="/home"><p>Home</p></Link>
    </div>
  )
};

export default Landing;