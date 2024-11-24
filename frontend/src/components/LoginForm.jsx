import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = ({ createLogin }) => {
  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')


  const handleLogin = (event) => {
    event.preventDefault()
    createLogin({
      username: newUsername,
      password: newPassword,
    })
    
    setNewUsername('')
    setNewPassword('')
  }
  return (
    <div className="form-container">
      <div className="form-content">
        <h1>Log in</h1>
        <p className="subtitle">to start learning</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Username</label>
            <div className="input-wrapper">
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <a href="/forgot-password" className="forgot-link">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="submit-button">
            Log in <span className="arrow">→</span>
          </button>
        </form>

        <p className="switch-form">
          Don't have an account? <Link to="/signup">Sign up now!</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

