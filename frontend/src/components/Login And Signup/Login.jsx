import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in by checking localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Ensure email ends with @gmail.com
    if (!email.endsWith('@gmail.com')) {
      alert('Email must end with @gmail.com');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.user.id); 
      alert('Login successful');
      setIsLoggedIn(true);
      window.location.href = '/';
    } catch (error) {
      alert('Invalid login credentials');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    alert('Logged out successfully');
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2 className="login-heading">Login to Your Account</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
          {!isLoggedIn ? (
            <button type="submit" className="login-button">Login</button>
          ) : (
            <button type="button" className="login-button" onClick={handleLogout}>Logout</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
