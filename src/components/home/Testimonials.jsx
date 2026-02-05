import React from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
// Import your images manually
import avatar1 from '../../assets/saniya.png';
import icon from "../../assets/double_2.png";


const TestimonialCard = ({ image, name, role, text }) => (
  // Adjusted min-width for mobile (min-w-[280px]) to prevent horizontal scroll issues on small screens
  <div className="min-w-full sm:min-w-[350px] md:min-w-[400px] px-4 md:px-6 flex-shrink-0">
    {/* Card Header */}
    <div className="flex justify-between items-start mb-4">
      <div className="flex gap-3 md:gap-4 items-center">
        <img src={avatar1} alt={name} className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover shrink-0" />
        <div>
          <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
          <p className="text-gray-400 text-[10px] mb-1">{role}</p>
          <div className="flex gap-0.5 text-yellow-400">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <Star key={i} size={10} fill="currentColor" className="md:w-[12px]" />
            ))}
          </div>
        </div>
      </div>
      {/* Navy Quote Icon */}
      <div className="text-[#000044] shrink-0">
        <img
          src={icon}
          alt="icon"
          className="w-5 h-5 md:w-6 md:h-6"
        />
      </div>
    </div>
    
    {/* Card Body */}
    <p className="text-gray-700 text-[11px] md:text-xs leading-relaxed font-medium">
      {text}
    </p>
  </div>
);

const Testimonials = () => {
  return (
    // Responsive padding
    <section className="py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Left Side: Stats and Title - Centered on mobile */}
        <div className="lg:w-1/3 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            What our customers are saying us?
          </h2>
          <p className="text-gray-500 text-[11px] md:text-xs mb-6 md:mb-8 leading-relaxed max-w-xs">
            Various versions have evolved over the years, sometimes by accident, 
            sometimes on purpose injected humour and the like.
          </p>
          <div className="mt-2">
            <span className="text-xl md:text-2xl font-bold text-gray-900 block">10K+</span>
            <p className="text-gray-400 text-[10px] font-semibold">Happy People</p>
          </div>
        </div>

        {/* Right Side: Responsive Border + Testimonials Wrapper */}
        {/* Border switches from top (mobile) to left (desktop) */}
        <div className="lg:w-2/3 border-t-2 lg:border-t-0 lg:border-l-2 border-[#000044] pt-8 lg:pt-0 lg:pl-4 flex flex-col">
          {/* Added overflow-x-auto to allow swiping on mobile if needed */}
          <div className="flex overflow-x-auto lg:overflow-hidden no-scrollbar gap-4 md:gap-0">
            <TestimonialCard 
              image={avatar1} 
              name="Sania Roy" 
              role="Customer" 
              text="Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores."
            />
            <TestimonialCard 
              image={avatar1} 
              name="Sania Roy" 
              role="Customer" 
              text="Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores."
            />
          </div>

          {/* Navigation Buttons - Centered on mobile */}
          <div className="flex justify-center lg:justify-start gap-2 px-4 md:px-6 mt-8 md:mt-12">
            <button className="bg-[#000044] text-white p-2 md:p-2.5 rounded-sm hover:bg-black transition-colors active:scale-90">
              <ArrowLeft size={18} />
            </button>
            <button className="bg-[#000044] text-white p-2 md:p-2.5 rounded-sm hover:bg-black transition-colors active:scale-90">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;