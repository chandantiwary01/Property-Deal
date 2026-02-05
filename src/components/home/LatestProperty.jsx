import React from 'react';
import { ChevronRight, MapPin, Share2, Bookmark, Sofa, Square, Users } from 'lucide-react';

import latest1 from '../../assets/latest_1.png';
import latest2 from '../../assets/latest_2.png';
import latest3 from '../../assets/latest_3.png';

//  Property Card Component 
const PropertyCard = ({ image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full transition-transform duration-300 hover:scale-[1.02]">
      {/* Image Container */}
      <div className="relative h-52 sm:h-56 shrink-0">
        <img src={image} alt="Property" className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3 bg-[#00aaff] text-white text-[10px] font-bold px-2 py-1 rounded">
          FOR RENT
        </div>
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="bg-[#000044] p-1.5 rounded-full text-white shadow-md hover:bg-black transition-colors">
            <Share2 size={14} />
          </button>
          <button className="bg-[#000044] p-1.5 rounded-full text-white shadow-md hover:bg-black transition-colors">
            <Bookmark size={14} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-gray-800 text-base md:text-lg line-clamp-1">Rent for 2BHK Flat in bengaluru</h3>
        
        <div className="flex items-start gap-2 mt-2 text-gray-400">
          <div className="bg-teal-600 p-1 rounded-full mt-0.5 shrink-0">
            <MapPin size={10} className="text-white" />
          </div>
          <p className="text-[11px] md:text-xs leading-tight line-clamp-2">No 37, 1st main road No 37, 1st main road No 37, 1st main road...</p>
        </div>

        {/* Specs Icons */}
        <div className="flex justify-between items-center mt-auto pt-6 border-t border-gray-100 px-1">
          <div className="text-center">
            <Sofa size={18} className="mx-auto text-gray-600 mb-1" />
            <p className="text-[9px] md:text-[10px] text-gray-500 font-medium">Semi furnished</p>
          </div>
          <div className="h-6 w-[1px] bg-gray-200"></div>
          <div className="text-center">
            <Square size={18} className="mx-auto text-gray-600 mb-1" />
            <p className="text-[9px] md:text-[10px] text-gray-500 font-medium">300 Sqft</p>
          </div>
          <div className="h-6 w-[1px] bg-gray-200"></div>
          <div className="text-center">
            <Users size={18} className="mx-auto text-gray-600 mb-1" />
            <p className="text-[9px] md:text-[10px] text-gray-500 font-medium">Family</p>
          </div>
        </div>

        {/* Price and Button */}
        <div className="mt-5">
           <p className="text-lg font-bold text-gray-800">₹ 7,000<span className="text-sm font-normal text-gray-500">/Month</span></p>
           <button className="w-full mt-3 bg-[#000044] text-white py-3 rounded-lg font-bold text-sm hover:bg-black transition-all active:scale-[0.98]">
             View Details
           </button>
        </div>
      </div>
    </div>
  );
};

//  Main Latest Property Component 
const LatestProperty = () => {
  const propertyImages = [latest1, latest2, latest3];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-12">
        <div className="flex items-center gap-3 md:gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Latest Property</h2>
          {/* Decorative Line - Hidden on very small screens to save space */}
          <div className="hidden xs:flex items-center">
             <div className="h-[2px] w-10 md:w-16 bg-blue-400"></div>
             <div className="w-3 h-3 bg-[#000044] rotate-45 ml-[-4px]"></div>
          </div>
        </div>
        
        <a href="#" className="text-blue-400 font-medium flex items-center gap-1 hover:underline text-sm md:text-base transition-colors">
          Explore More property <ChevronRight size={18} />
        </a>
      </div>
      
      {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {propertyImages.map((img, index) => (
          <PropertyCard key={index} image={img} />
        ))}
      </div>
    </section>
  );
};

export default LatestProperty;