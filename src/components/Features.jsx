import React from "react";

const Features = () => {
  return (
    <div className="featur homepage">
      <div className="featurcontain">
        <div className="topfeatur">
          <p>Features</p>
          <h3>
            Carbon Compass’s product features include real-time energy
            monitoring, GHG emissions tracking, AI-powered analytics, predictive
            maintenance, regulatory compliance tools, customizable dashboards,
            seamless system integration, renewable energy optimization, and
            automated reporting.
          </h3>
        </div>
        <div className="otherfeatur">
          <div className="left1featur Allfeatur">
            <p>Real-time Energy Monitoring</p>
            <span>
              Continuously track energy usage across operations for immediate
              insights and adjustments.
            </span>
          </div>
          <div className="left2featur Allfeatur">
            <p>Carbon Emission Tracking</p>
            <span>
              Accurately monitor and report greenhouse gas emissions to help
              achieve sustainability targets.
            </span>
          </div>
          <div className="left3featur Allfeatur">
            <p>A.I. Powered Analytics</p>
            <span>
              Utilize advanced AI algorithms to analyze data and provide
              actionable recommendations for optimization.
            </span>
          </div>
          <div className="right1featur Allfeatur bottum3featur">
            <p>Regulatory Compliance Tools</p>
            <span>
              Ensure compliance with environmental regulations through
              comprehensive tracking and reporting capabilities.
            </span>
          </div>
          <div className="right2featur Allfeatur bottum3featur">
            <p>Customisable Dashboards</p>
            <span>
              Tailor the user interface to display relevant data and metrics,
              making it easy to monitor performance and progress.
            </span>
          </div>
          <div className="right3featur Allfeatur bottum3featur">
            <p>Integration With Existing Systems</p>
            <span>
              Seamlessly connect with your current infrastructure and data
              sources for a unified view of operations.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;