// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./styles.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
  
//       <App />
  
//   );
import React from "react";
import ReactDOM from "react-dom/client"; // Import from "react-dom/client"
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import "./styles.css";

// Use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);