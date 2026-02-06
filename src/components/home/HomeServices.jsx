import React from 'react';
import { Shield, Home, Briefcase, Users, ChevronRight } from 'lucide-react';

// Import images
import painterImg from '../../assets/man_img.png';
import service1 from '../../assets/service_1.png';
import service2 from '../../assets/service_2.png';
import service3 from '../../assets/service_3.png';


import lineImg from "../../assets/Line_2.png";

const ServiceCard = ({ title, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden w-full transition-transform hover:scale-[1.02]">
      
      {/* Image Section */}
      <div className="relative h-48 sm:h-44">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* View Details Button */}
        <button className="absolute bottom-0 right-4 translate-y-1/2 bg-[#01004C] text-white text-xs font-semibold px-6 py-2 rounded-md shadow">
          View Details
        </button>
      </div>

      {/* Blue Divider Line */}
      <div className="h-1 w-full bg-[#41B3FF]" />

      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-[#01004C] font-semibold text-lg mb-2 flex items-center gap-1">
          {title}
          <ChevronRight size={18} />
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed">
          Lorem Ipsum has been Ipsum has been Lorem Ipsum has been Lorem Ipsum has been
        </p>
      </div>
    </div>
  );
};


const HomeServices = () => {
  return (
    <div className="overflow-hidden">
      {/* Top Section */}
      <section className="bg-[#f4faff] pt-12 pb-16 md:pt-16 md:pb-20 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:items-end">
          {/* Left: Painter Image - Centered on mobile, aligned left on desktop */}
          <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
            <img src={painterImg} alt="Painter" className="max-h-[360px] md:max-h-[450px] lg:max-h-[800px] object-contain" />
          </div>

          {/* Right: Content Area */}
          <div className="w-full lg:w-3/4">
            {/* Header: Stacks on small mobile, row on larger screens */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-10">
              <div className="flex items-center gap-3 md:gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Home Services</h2>
                <div className="flex items-center mt-2">
                            <img
                              src={lineImg}
                              alt="Decorative line"
                              className="w-10 md:w-16 h-auto"
                            />
                          </div>
              </div>
              <a href="#" className="text-blue-400 font-medium flex items-center gap-1 text-sm hover:underline">
                Explore More Services <span className="text-lg">›</span>
              </a>
            </div>

            {/* Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-[#01004C]">
              <ServiceCard title="Home renovation" image={service1} />
              <ServiceCard title="Electrician" image={service2} />
              <ServiceCard title="Mason" image={service3} />
            </div>
          </div>
        </div>
      </section>

      
      
    </div>
  );
};

export default HomeServices;