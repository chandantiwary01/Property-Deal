import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'; 
import ConstructionPage from './pages/ConstructionPage';
import PropertyPage from "./pages/PropertyPage";
import PropertyDetailPage from './pages/PropertyDetailPage';




function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/construction" element={<ConstructionPage />} />
          <Route path="/property" element={<PropertyPage />} />
          <Route path="/property-detail" element={<PropertyDetailPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
