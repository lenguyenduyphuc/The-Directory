import React from 'react';
import './Header.css';

const Header = ({ course }) => {
  return (
    <div className="header-container">
      <h2 className="header-title">{course}</h2>
    </div>
  );
};

export default Header;

