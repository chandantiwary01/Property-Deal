import React from 'react';
import { Shield, Home, Briefcase, Users, ChevronRight } from 'lucide-react';

// Import images
import painterImg from '../../assets/man_img.png';
import service1 from '../../assets/service_1.png';
import service2 from '../../assets/service_2.png';
import service3 from '../../assets/service_3.png';

const ServiceCard = ({ title, image }) => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-50 overflow-hidden">
    <div className="relative h-44">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <button className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#000033] text-white text-[10px] px-6 py-2 rounded-t-lg font-bold">
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
      <section className="bg-[#f4faff] pt-16 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Left: Painter Image */}
          <div className="lg:w-1/4 flex justify-center items-end">
            <img src={painterImg} alt="Painter" className="max-h-[500px] object-contain" />
          </div>

          {/* Right: Content */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl font-bold text-gray-900">Home Services</h2>
                <div className="flex items-center">
                  <div className="h-[2px] w-14 bg-blue-300"></div>
                  <div className="w-3 h-3 bg-[#3d4272] rotate-45 -ml-1"></div>
                </div>
              </div>
              <a href="#" className="text-blue-400 font-medium flex items-center gap-1 text-sm">
                Explore More Services <span className="text-lg">›</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ServiceCard title="Home renovation" image={service1} />
              <ServiceCard title="Electrician" image={service2} />
              <ServiceCard title="Mason" image={service3} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 relative">
        
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-400 text-xs mb-16 max-w-3xl mx-auto leading-loose">
            Lorem Ipsum has been Ipsum has been Lorem Ipsum has been Lorem Ipsum has been Lorem Ipsum has been...
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
            {[
              { icon: <Shield />, title: "Safety" },
              { icon: <Home />, title: "Quality Work" },
              { icon: <Briefcase />, title: "Experience" },
              { icon: <Briefcase />, title: "Professional" },
              { icon: <Users />, title: "Qualified Staff" },
              { icon: <Briefcase />, title: "Experience" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-14 h-14 bg-[#00aeff] rounded-full flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,174,239,0.3)]">
                  {React.cloneElement(item.icon, { size: 24, className: "text-white" })}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-[11px] leading-relaxed px-4">
                  Lorem Ipsum has been Ipsum has been Lorem Ipsum has been Ipsum has been
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeServices;