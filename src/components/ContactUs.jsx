import React, { useState, useEffect } from "react";
import "./ContactUs.css"; // Import the CSS file for styling

const ContactUs = () => {
  const [carbonCount, setCarbonCount] = useState("0123456789"); // State for carbon counter

  // Simulate a dynamic carbon counter (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCarbonCount((prev) => {
        const newCount = String(Number(prev) + 1).padStart(10, "0");
        return newCount;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="services-container">
      <div className="top-container">
        <div className="title">GLOBON</div>
        <div className="subtitle">Be A Part of Solution not Pollution</div>
      </div>
      {/* Registration Form */}
      <div className="left-form-box">
        <h3>Join Us</h3>
        <label>Name <br /> </label>
        <input type="text" placeholder="Enter your name" />
        <label>Email <br /> </label>
        <input type="email" placeholder="Enter your email"  /> <br />
        <label>Date of Birth <br /> </label>
        <input type="date" />
        <p style={{ fontSize: "12px", color: "darkblue", marginTop: "1em" }}>Already registered</p>
        <button>Register</button>
      </div>

      {/* Carbon Counter */}
      <div className="right-carbon-counter">
        <div> 
          <span id="carbon-count">{carbonCount}</span>
          </div>
      <p>Total carbon produced this year in 2025</p>
      </div>

    </div>
  );
};

export default ContactUs;