import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Brand Logo" className="navbar-logo" />
        </NavLink>
        <ul className="navbar-links">
          <li><NavLink to="/" activeClassName="active-link">Home</NavLink></li>
          <li><NavLink to="/resources" activeClassName="active-link">Resources</NavLink></li>
          <li><NavLink to="/roadmaps" activeClassName="active-link">Roadmaps</NavLink></li>
          <li><NavLink to="/quizzes" activeClassName="active-link">Quizzes</NavLink></li>
          <li><NavLink to="/rewards" activeClassName="active-link">Rewards</NavLink></li>
        </ul>
        <div className="auth-buttons">
          <NavLink to="/login" className="auth-link">Login</NavLink>
          <NavLink to="/signup" className="auth-link">Signup</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
