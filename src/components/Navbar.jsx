import React, { useState } from "react";
import { Menu, X, User } from "lucide-react"; // Import User icon for the profile
import logo from "./img/Globon-logo.png"; // Import the logo image
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar state
  };

  return (
    <nav className="navebar">
      <div className="rightnav">
        {/* Logo */}
        <img src={logo} alt="Globon Logo" />
      </div>

      {/* Toggle Button */}
      <button className="menu-btn" onClick={toggleSidebar}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`leftnav ${isOpen ? "open" : ""}`}>
        <li className="Home" id="Home">
          <a href="/">Home</a> {/* Use Link for navigation */}
        </li>
        <li className="Home" id="Srvices">
          <a href="/CalculateCarbonEmissions">Services</a> {/* Use Link for navigation */}
        </li>
        <li className="Home" id="ContactUs">
          <a href="/contact">Contact</a> {/* Use Link for navigation */}
        </li>
        <li className="Home" id="About">
          <a href="/about">About</a> {/* Use Link for navigation */}
        </li>
        <li className="Home" id="Register">
          <a href="/register">Register</a> {/* Use Link for navigation */}
        </li>

        {/* Profile Option */}
        <li className="profile" id="Profile">
          <a href="/profile">
            <User size={25} />
          </a> {/* Use Link for navigation */}
        </li>
      </div>
    </nav>
  );
};

export default Navbar;