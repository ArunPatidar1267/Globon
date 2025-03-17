import React from "react";
import "./CalculateCarbonEmissions.css"; // Import the CSS file for styling

const CalculateCarbonEmissions = () => {
  const goBack = () => {
    window.history.back(); // Navigate back in the browser history
  };

  return (
    <>
    <div className="back-button-ui">
      {/* Back Button */}
      <button className="back-button" onClick={goBack}>
        &#x2190; {/* Left arrow symbol */}
      </button>

      {/* Category Links */}
      <div className="category">
        <a href="#">Electronic &#8594;</a>
      </div>
      <div className="category Transportation">
        <a href="#">Transportation &#8594;</a>
      </div>
      <div className="category Food-Product">
        <a href="#">Food Product &#8594;</a>
      </div>
      <div className="category Home-Waste">
        <a href="#">Home Waste &#8594;</a>
      </div>
    </div>

    
    </>
  );
};

export default CalculateCarbonEmissions;