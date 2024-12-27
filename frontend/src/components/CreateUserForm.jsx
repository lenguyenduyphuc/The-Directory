import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CreateUserForm.css";

const SignupForm = ({ createUser }) => {
  const [newUsername, setNewUsername] = useState("");
  const [newName, setNewName] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    createUser({
      username: newUsername,
      name: newName,
      password: newPassword,
    });
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <h1>Create account</h1>
        <p className="subtitle">to start learning</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Create account
          </button>
        </form>

        <p className="switch-form">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
