import React from 'react';
import { Play, Share2 } from 'lucide-react';
import propertyVideo from '../../assets/video_prop.png';

const PropertyOverview = () => {
  return (
    <section className="bg-[#f4fbff] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title with Decorative Line */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Property Overview</h2>
          <div className="flex items-center">
            <div className="h-[2px] w-16 bg-blue-400"></div>
            <div className="w-3 h-3 bg-[#3d4272] rotate-45 -ml-1"></div>
          </div>
        </div>

        {/* Video Thumbnail Container */}
        <div className="relative rounded-lg overflow-hidden shadow-2xl">
          <img 
            src={propertyVideo} 
            alt="Property Overview" 
            className="w-full h-[500px] object-cover"
          />
          
          {/* Top Right Share Button */}
          <button className="absolute top-6 right-6 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
            <Share2 size={24} className="text-gray-800" />
          </button>

          {/* Center Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
              <Play fill="#000044" size={28} className="text-[#000044] ml-1" />
            </button>
          </div>

          {/* Bottom Progress Bar Mockup */}
          <div className="absolute bottom-10 left-0 w-full px-1">
            <div className=" w-full bg-white/80 rounded-full flex">
              <div className="h-full w-[40%] bg-red-600 rounded-l-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyOverview;