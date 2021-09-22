import React from 'react';
import { Link } from 'react-router-dom';

export function Landing() {
  return (
    <div>  
            <Link to="/home"><h1>Home</h1></Link>
    </div>
  )
};

export default Landing;