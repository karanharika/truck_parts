import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PartFinder from "./components/PartFinder/PartFinder";

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partfinder" element={<PartFinder />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    );
  }
}

export default App;
