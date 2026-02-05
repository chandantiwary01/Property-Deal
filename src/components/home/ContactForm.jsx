import React from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import workersImg from '../../assets/construction_workers.png';

const ContactForm = () => {
  return (
    // Adjusted padding for mobile (py-12) vs desktop (py-20)
    <section className="py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Grid: Stacks on mobile, 2 columns on Large screens. Gap adjusted for smaller screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Left Side: Form */}
        <div className="order-2 lg:order-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#000044] mb-6 md:mb-10 text-center lg:text-left">
            Whats your require ?
          </h2>
          
          <form className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Enter Your name" 
                className="w-full bg-[#f5f5f5] p-4 rounded-lg outline-none text-sm placeholder-gray-400 focus:ring-1 focus:ring-blue-300 transition-all"
              />
              <input 
                type="text" 
                placeholder="Enter Your phone number" 
                className="w-full bg-[#f5f5f5] p-4 rounded-lg outline-none text-sm placeholder-gray-400 focus:ring-1 focus:ring-blue-300 transition-all"
              />
            </div>

            <div className="relative">
              <input 
                type="text" 
                placeholder="Location" 
                className="w-full bg-[#f5f5f5] p-4 pr-10 rounded-lg outline-none text-sm placeholder-gray-400 focus:ring-1 focus:ring-blue-300 transition-all"
              />
              <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>

            <div className="relative">
              <select className="w-full bg-[#f5f5f5] p-4 rounded-lg outline-none text-sm text-gray-400 appearance-none cursor-pointer focus:ring-1 focus:ring-blue-300 transition-all">
                <option>Select Your services</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
            </div>

            {/* Tag Buttons: Improved wrapping and mobile spacing */}
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center lg:justify-start">
              <button type="button" className="bg-[#000044] text-white px-4 md:px-6 py-2.5 md:py-3 rounded-md text-[10px] md:text-xs font-semibold whitespace-nowrap">
                I need a mason
              </button>
              <button type="button" className="border border-gray-300 text-[#000044] px-4 md:px-6 py-2.5 md:py-3 rounded-md text-[10px] md:text-xs font-semibold hover:bg-gray-50 whitespace-nowrap">
                I need a mason
              </button>
              <button type="button" className="border border-gray-300 text-[#000044] px-4 md:px-6 py-2.5 md:py-3 rounded-md text-[10px] md:text-xs font-semibold hover:bg-gray-50 whitespace-nowrap">
                I need a mason
              </button>
            </div>

            <textarea 
              placeholder="Type your message" 
              rows={5}
              className="w-full bg-[#f5f5f5] p-4 rounded-lg outline-none text-sm placeholder-gray-400 resize-none focus:ring-1 focus:ring-blue-300 transition-all"
            ></textarea>

            <div className="flex justify-center lg:justify-start">
              <button type="submit" className="w-full md:w-auto bg-[#000044] text-white px-12 md:px-16 py-4 rounded-lg font-bold text-sm hover:bg-black transition-all active:scale-95 shadow-md">
                Post Now
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Tilted Image Design */}
        <div className="relative flex justify-center order-1 lg:order-2 px-4 mb-8 lg:mb-0">
          {/* Tilted Blue Background Shape - Hidden on very small screens or adjusted for scale */}
          <div className="absolute inset-0 bg-blue-300/40 rounded-3xl rotate-[-3deg] transform scale-100 md:scale-105 -z-10"></div>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-md lg:max-w-none">
            <img 
              src={workersImg} 
              alt="Construction Workers" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;