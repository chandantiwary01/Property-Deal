import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import ConstructionPage from './pages/ConstructionPage';
import PropertyPage from "./pages/PropertyPage";




function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/construction" element={<ConstructionPage />} />
          <Route path="/property" element={<PropertyPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
