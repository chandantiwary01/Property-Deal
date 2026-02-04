import React from 'react';
import heroBg from '../../assets/hero-bg.png'; // Ensure this path is correct
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative h-[550px] flex items-center justify-center text-center text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div> 
      </div>
      
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Find your dream home</h1>
        <p className="text-md mb-8 max-w-2xl mx-auto text-gray-100 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse 
          ultrices gravida.
        </p>
        
        {/* Search Bar */}
        <div className="bg-white p-1 rounded-sm flex max-w-2xl mx-auto shadow-2xl">
          <input 
            type="text" 
            placeholder="Search for more results..." 
            className="flex-grow px-4 py-3 text-gray-700 outline-none placeholder-gray-400"
          />
          <button className="bg-[#000044] text-white px-8 py-3 rounded-sm flex items-center gap-3 font-semibold hover:bg-black transition-all">
            Search
            <Search size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;