import React from 'react';
import { Shield, Home, Briefcase, Users, ChevronRight } from 'lucide-react';

// Import images
import painterImg from '../../assets/man_img.png';
import service1 from '../../assets/service_1.png';
import service2 from '../../assets/service_2.png';
import service3 from '../../assets/service_3.png';

const ServiceCard = ({ title, image }) => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-50 overflow-hidden w-full transition-transform hover:scale-[1.02]">
    <div className="relative h-48 sm:h-44">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <button className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#000033] text-white text-[10px] px-6 py-2 rounded-t-lg font-bold whitespace-nowrap">
        View Details
      </button>
    </div>
    <div className="p-5">
      <h3 className="text-[#000044] font-bold text-lg mb-2 flex items-center gap-1">
        {title} <ChevronRight size={18} />
      </h3>
      <p className="text-gray-400 text-[10px] leading-relaxed">
        Lorem Ipsum has been Ipsum has been Lorem Ipsum has been Lorem Ipsum has been...
      </p>
    </div>
  </div>
);

const HomeServices = () => {
  return (
    <div className="overflow-hidden">
      {/* Top Section */}
      <section className="bg-[#f4faff] pt-12 pb-16 md:pt-16 md:pb-20 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:items-end">
          {/* Left: Painter Image - Centered on mobile, aligned left on desktop */}
          <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
            <img src={painterImg} alt="Painter" className="max-h-[350px] md:max-h-[450px] lg:max-h-[500px] object-contain" />
          </div>

          {/* Right: Content Area */}
          <div className="w-full lg:w-3/4">
            {/* Header: Stacks on small mobile, row on larger screens */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-10">
              <div className="flex items-center gap-3 md:gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Home Services</h2>
                <div className="flex items-center">
                  <div className="h-[2px] w-10 md:w-14 bg-blue-300"></div>
                  <div className="w-3 h-3 bg-[#3d4272] rotate-45 -ml-1"></div>
                </div>
              </div>
              <a href="#" className="text-blue-400 font-medium flex items-center gap-1 text-sm hover:underline">
                Explore More Services <span className="text-lg">›</span>
              </a>
            </div>

            {/* Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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