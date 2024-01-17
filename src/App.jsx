import { useState } from 'react'
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';'react-router-dom';
import './App.css'

// import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer"; 
import Home from "./components/pages/home/Home.jsx";
import Game from "./components/pages/Game/Game.jsx";
import HighScores from "./components/pages/HighScores/HighScores.jsx";
// import dotenv from 'dotenv';


function App() {
  return (
    <Router>
      <div className="flex-container">
        <div className="container">
          <Navbar />
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/highscores" element={<HighScores />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;