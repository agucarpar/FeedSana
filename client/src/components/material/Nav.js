import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav >
      <ul>
      <li><Link to='/recipies'>recipies</Link></li>
        <li><Link to='/plans'>Plans</Link></li>
      </ul>
    </nav>
  )
}

export default navbar;