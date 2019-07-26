import React from 'react';
import { Link } from 'react-router-dom';
import "./LinkNav.css"

const LinkNavBar = () => {
  return (
    <nav >
      <ul className="list-no-stile">
      <li><Link to='/recipies'>Recipies</Link></li>
      </ul>
    </nav>
  )
}

export default LinkNavBar;