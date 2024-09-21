import React from 'react';
import './Navbar.css';
import logo from './logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Brand Logo" className="navbar-logo" />
        </a>
        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Roadmaps</a></li>
          <li><a href="#">Quizzes</a></li>
          <li><a href="#">Rewards</a></li>
        </ul>
        <a href="#" className="contact-button">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
