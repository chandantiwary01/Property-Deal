import React from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import workersImg from '../../assets/construction_workers.png';

const ContactForm = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Form */}
        <div>
          <h2 className="text-3xl font-bold text-[#000044] mb-10">Whats your require ?</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Enter Your name" 
                className="w-full bg-[#f5f5f5] p-4 rounded-md outline-none text-sm placeholder-gray-400"
              />
              <input 
                type="text" 
                placeholder="Enter Your phone number" 
                className="w-full bg-[#f5f5f5] p-4 rounded-md outline-none text-sm placeholder-gray-400"
              />
            </div>

            <div className="relative">
              <input 
                type="text" 
                placeholder="Location" 
                className="w-full bg-[#f5f5f5] p-4 pr-10 rounded-md outline-none text-sm placeholder-gray-400"
              />
              <MapPin className="absolute right-4 top-4 text-gray-400" size={18} />
            </div>

            <div className="relative">
              <select className="w-full bg-[#f5f5f5] p-4 rounded-md outline-none text-sm text-gray-400 appearance-none cursor-pointer">
                <option>Select Your services</option>
              </select>
              <ChevronDown className="absolute right-4 top-4 text-gray-400 pointer-events-none" size={18} />
            </div>

            {/* Tag Buttons */}
            <div className="flex flex-wrap gap-4">
              <button type="button" className="bg-[#000044] text-white px-6 py-3 rounded-md text-xs font-semibold">
                I need a mason
              </button>
              <button type="button" className="border border-gray-300 text-[#000044] px-6 py-3 rounded-md text-xs font-semibold hover:bg-gray-50">
                I need a mason
              </button>
              <button type="button" className="border border-gray-300 text-[#000044] px-6 py-3 rounded-md text-xs font-semibold hover:bg-gray-50">
                I need a mason
              </button>
            </div>

            <textarea 
              placeholder="Type your message" 
              rows={6}
              className="w-full bg-[#f5f5f5] p-4 rounded-md outline-none text-sm placeholder-gray-400 resize-none"
            ></textarea>

            <button type="submit" className="bg-[#000044] text-white px-16 py-4 rounded-md font-bold text-sm hover:bg-black transition-colors">
              Post Now
            </button>
          </form>
        </div>

        {/* Right Side: Tilted Image Design */}
        <div className="relative flex justify-center">
          {/* Tilted Blue Background Shape */}
          <div className="absolute inset-0 bg-blue-300/40 rounded-3xl rotate-[-3deg] transform scale-105 -z-10"></div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl">
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