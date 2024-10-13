import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'; // Removed unused useNavigate
import './Navbar.css';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in based on token
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Convert token presence to boolean for logged-in state
  }, []);

  // Handle logout
  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    window.location.href = '/'; // Navigate to home page and reload
  };

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
          {isLoggedIn ? (
            <button onClick={handleLogout} className="auth-link logout-button">
              Logout
            </button>
          ) : (
            <>
              <NavLink to="/login" className="auth-link">Login</NavLink>
              <NavLink to="/signup" className="auth-link">Signup</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
