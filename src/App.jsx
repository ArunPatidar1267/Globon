import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
// import Features from "./components/Features";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ContactUs />
      {/* <Features /> */}
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