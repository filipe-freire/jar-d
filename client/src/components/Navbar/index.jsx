import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">HOME</Link>
      <Link to="/jarSystemInfo">INFO</Link>
    </nav>
  );
};

export default NavBar;
