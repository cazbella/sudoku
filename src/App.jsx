import React, {useState} from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { SearchProvider } from './components/Giphy/SearchContext.jsx'; // Adjust the path accordingly
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer"; 
import Home from "./components/pages/home/Home.jsx";
import Game from "./components/pages/Game/Game.jsx";
import HighScores from "./components/pages/HighScores/HighScores.jsx";

function App() {
  const [motivation, setMotivation] = useState("")
  
  console.log("motivation value in the app jsx", motivation)
  return (
    <SearchProvider>
      <Router>
        <div className="flex-container">
          <div className="container">
            <Navbar />
            {/* Routes */}
            <Routes>
              <Route path="/" element={<Home motivation={motivation} setMotivation={setMotivation} />} />
              <Route path="/game" element={<Game motivation={motivation}/>} />
              <Route path="/highscores" element={<HighScores />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </SearchProvider>
  );
}

export default App;
