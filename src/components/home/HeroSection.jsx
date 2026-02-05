import React from 'react';
import heroBg from '../../assets/hero-bg.png'; 
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    // Changed h-[550px] to min-h-[500px] and md:h-[600px] for better mobile scaling
    <div className="relative min-h-[500px] md:h-[600px] flex items-center justify-center text-center text-white px-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div> 
      </div>
      
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Responsive Text: Smaller on mobile (text-3xl), larger on desktop (md:text-6xl) */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Find your dream home
        </h1>
        
        <p className="text-sm md:text-base mb-8 max-w-2xl mx-auto text-gray-200 leading-relaxed px-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse 
          ultrices gravida.
        </p>
        
        {/* Search Bar: Stacks on mobile (flex-col), row on small screens up (sm:flex-row) */}
        <div className="bg-white p-1.5 sm:p-1 rounded-md flex flex-col sm:flex-row max-w-2xl mx-auto shadow-2xl gap-2 sm:gap-0">
          <input 
            type="text" 
            placeholder="Search for more results..." 
            className="flex-grow px-4 py-3 text-gray-700 outline-none placeholder-gray-400 text-sm md:text-base rounded-sm"
          />
          <button className="bg-[#000044] text-white px-8 py-3 rounded-sm flex items-center justify-center gap-3 font-semibold hover:bg-black transition-all w-full sm:w-auto active:scale-95">
            <span className="text-sm md:text-base">Search</span>
            <Search size={18} className="md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;