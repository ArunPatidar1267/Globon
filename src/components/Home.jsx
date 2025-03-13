import React from "react";
import logo from "./img/Home-first-img.png";

const Home = () => {
  return (
    <div className="homepage" id="Home">


      <div className="righthome">
        {/* <h1>Globon</h1> */}
        <p>Be a part of Solution not Pollution  </p>
        <div className="righthome2">
          Globon: Real-Time Tracking and Solutions for a Sustainable Future is an innovative application in an age characterized by heightened environmental consciousness. Low levels of awareness concerning personal and collective carbon footprints have caused alarming problems of climate change.
        </div>
      </div>



      <div className="lefthome">
        <div className="icon">
        <img src={logo} alt="Globon Logo" />
        </div>
       
      </div>
    </div>

  );
};

export default Home;