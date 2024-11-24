import React from "react";

const Footer = () => {
  const footerStyle = {
    color: "white", 
    fontStyle: "italic",
    fontSize: 20,
    backgroundColor: '#282828'
  };

  return (
    <div style={footerStyle}>
      <em>Made by Nguyen Duy Phuc Le 2024</em>
    </div>
  );
};

export default Footer;
