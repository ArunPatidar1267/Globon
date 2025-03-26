import React from "react";
import "./CalculateCarbonEmissions.css"; // Import the CSS file for styling
import { Link } from "react-router-dom"; // Import Link from react-router-dom




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
        <Link to="/ElectronicCarbonEmissionsCalculator">Electronic &#8594;</Link>
      </div>
      <div className="category Transportation">
        <Link to="#">Transportation &#8594;</Link>
      </div>
      <div className="category Food-Product">
        <Link to="#">Food Product &#8594;</Link>
      </div>
      <div className="category Home-Waste">
        <Link to="#">Home Waste &#8594;</Link>
      </div>
    </div>

  
    
    </>
  );
};

export default CalculateCarbonEmissions;