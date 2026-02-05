import React from 'react';
import { Play, Share2 } from 'lucide-react';
import propertyVideo from '../../assets/Overview_img.png';

const PropertyOverview = () => {
  return (
    // Responsive padding: smaller on mobile (py-10), larger on desktop (md:py-16)
    <section className="bg-[#f4fbff] py-10 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Title with Decorative Line - Responsive text size */}
        <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 whitespace-nowrap">
            Property Overview
          </h2>
          <div className="flex items-center">
            <div className="h-[2px] w-10 md:w-16 bg-blue-400"></div>
            <div className="w-3 h-3 bg-[#3d4272] rotate-45 -ml-1"></div>
          </div>
        </div>

        {/* Video Thumbnail Container - Fluid height based on device */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl group">
          <img 
            src={propertyVideo} 
            alt="Property Overview" 
            className="w-full h-60 sm:h-80 md:h-[450px] lg:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Top Right Share Button - Responsive sizing */}
          <button className="absolute top-4 right-4 md:top-6 md:right-6 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all active:scale-90">
            <Share2 size={20} className="text-gray-800 md:w-6 md:h-6" />
          </button>

          {/* Center Play Button - Larger on desktop, perfectly centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all active:scale-95 group/play">
              <Play 
                fill="#000044" 
                className="text-[#000044] ml-1 w-6 h-6 md:w-8 md:h-8 transition-colors group-hover/play:text-blue-600" 
              />
            </button>
          </div>

          {/* Bottom Progress Bar Mockup - Adjusted positioning for mobile */}
          <div className="absolute bottom-4 md:bottom-10 left-0 w-full px-4 md:px-8">
            <div className=" bg-white/30 backdrop-blur-sm h-1 md:h-1.5 rounded-full overflow-hidden">
              <div className="h-full w-[40%] bg-red-600 rounded-l-full relative">
                {/* Optional: Add the little seek circle for more realism */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full border-2 border-white shadow-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyOverview;