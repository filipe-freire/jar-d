import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const NavBar = props => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/jarSystemInfo">Jar System</Link>
      {(props.user && (
        <>
          <Link id="user-name" to="/profile">{`Welcome, ${props.user.name}`}</Link>
          <button className="btn-secondary" onClick={props.onSignOut}>
            Sign Out
          </button>
        </>
      )) || (
        <>
          <Link to="/authentication/sign-up">Sign Up</Link>
          <Link to="/authentication/sign-in">Sign In</Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
