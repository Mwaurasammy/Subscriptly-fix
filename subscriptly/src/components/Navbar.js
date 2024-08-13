import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({user}) => {
  return (
    <nav className='top-nav'>
      <ul>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        {user && <li className="user-name">Welcome, {user}!</li>}
      </ul>
    </nav>
  );
};

export default Navbar;