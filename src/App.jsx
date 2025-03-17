import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import CalculateCarbonEmissions from "./components/CalculateCarbonEmissions";
// import Features from "./components/Features";
import Footer from "./components/Footer";
import "./styles.css";
import { Route, Routes } from "react-router-dom";



function App() {


  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CalculateCarbonEmissions" element={<CalculateCarbonEmissions />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;





// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import CalculateCarbonEmissions from "./components/CalculateCarbonEmissions";
// import ContactUs from "./components/ContactUs";
// import About from "./components/About";
// // import Register from "./components/Register";
// // import Profile from "./components/Profile";

// function App() {
//   return (
//     <Router> {/* Wrap the entire app in <Router> */}
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/calculate-carbon-emissions" element={<CalculateCarbonEmissions />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="/about" element={<About />} />
//         {/* <Route path="/register" element={<Register />} /> */}
//         {/* <Route path="/profile" element={<Profile />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;