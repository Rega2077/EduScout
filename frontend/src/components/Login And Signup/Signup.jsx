import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    // Ensure email ends with @gmail.com
    if (!email.endsWith('@gmail.com')) {
      alert('Email must end with @gmail.com');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/auth/signup', { name, email, password });
      alert('Signup successful');
      window.location.href = '/';
    } catch (error) {
      alert('Signup failed');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h2 className="signup-heading">Signup</h2>
        <form onSubmit={handleSignup} className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input-field"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
          <button type="submit" className="signup-button">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
