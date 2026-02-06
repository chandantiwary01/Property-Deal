import React from 'react';
import heroBg from '../../assets/hero-bg.png'; 
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    
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
        <div className="flex items-stretch w-full overflow-hidden  border border-gray-200 rounded-md shadow-lg h-14 md:h-16" >
          <input 
            type="text" 
            placeholder="Search for more results..." 
            className="flex-grow px-4 py-2 text-sm text-gray-300 bg-transparent outline-none md:text-lg placeholder-white"
          />
          <button className="bg-[#000044] hover:bg-blue-300 active:scale-95 transition-all text-white px-4 md:px-10 flex items-center justify-center gap-2 font-bold whitespace-nowrap">
            <span className="text-sm md:text-base">Search</span>
            <Search size={18} className="w-4 h-4 md:w-6 md:h-6"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;