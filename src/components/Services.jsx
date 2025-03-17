import React from "react";
import graph from "./img/corbon Graph.png";
const Services = () => {
  return (
    <div className="srvicess Srvices">
      <div className="totalcarbon">
        <div className="lefttotalcorbon">
          <div className="corbongraphditel">
            A few of the important parameters that are used for carbon tracking
            include energy consumption, transportation, waste production, and
            water usage. A carbon tracking system works on proven formulas to
            calculate carbon emissions.
          </div>
          <div className="corbongraph">
            <img src={graph} alt="graph" />
          </div>
        </div>
        <div className="righttotalcorbon">
          <div className="yearcorbonvalues">
          <div className="corbonvalue">
            <h1>Total carbon produced this year in 2025</h1>
          </div>
          <div className="numbers">
            <h2>29,00,00,00,00,000 kg/2.9 gigatons</h2>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Services;