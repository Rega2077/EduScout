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
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolios</a></li>
          <li><a href="#">Adtriox OOH</a></li>
        </ul>
        <a href="#" className="contact-button">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
