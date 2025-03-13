import React from "react";
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <h1>GLOBON</h1>
     
      <div className="footer-nav">
        <div>
          <a href="#">Cool Globe</a>
          <a href="#">Donate</a>
          <a href="#">Join Us</a>
        </div>
        <div>
          <a href="#">Home</a>
          <a href="#">Profile</a>
          <a href="#">Community</a>
        </div>
      </div>
      <div className="copyright">
        @copyright 2025 reserved by @The Arcadians
      </div>
    </footer>
  );
};

export default Footer;