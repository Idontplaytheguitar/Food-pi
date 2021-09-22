import React from 'react';
import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/add">Add Recipe</Link>
      </div>
    </div>
  )
};

export default Nav;