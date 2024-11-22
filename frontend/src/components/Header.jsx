import React from 'react';
import './Header.css';

const Header = ({ course }) => {
  return (
    <div className="header-container">
      <h1 className="header-title">{course}</h1>
    </div>
  );
};

export default Header;
