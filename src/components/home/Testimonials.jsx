import React from 'react';
import { Star, ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';

// Import your images manually
import avatar1 from '../../assets/saniya.png';
import icon from "../../assets/double_2.png";
// Assuming these are defined elsewhere or imported
// import service1 from '../../assets/service1.png'; 

/**
 * UPDATED SERVICE CARD (Replica Style)
 */
const ServiceCard = ({ title, image }) => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden w-full transition-transform hover:scale-[1.02]">
    <div className="relative h-56 sm:h-52 overflow-hidden border-b-4 border-[#33a1fd]">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover" 
      />
      <button className="absolute bottom-4 right-4 bg-[#000044] text-white text-xs px-5 py-2.5 rounded-lg font-bold whitespace-nowrap shadow-md hover:bg-[#000066] transition-colors">
        View Details
      </button>
    </div>
    <div className="p-6">
      <h3 className="text-[#000044] font-extrabold text-2xl mb-3 flex items-center gap-2">
        {title} <ChevronRight size={22} className="mt-0.5" />
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed font-medium">
        Lorem Ipsum has been Ipsum has been Lorem Ipsum has been Lorem Ipsum has been Lorem Ipsum has been Lorem Ipsum has been
      </p>
    </div>
  </div>
);

/**
 * UPDATED TESTIMONIAL CARD
 */
const TestimonialCard = ({ image, name, role, text }) => (
  <div className="min-w-full sm:min-w-[350px] md:min-w-[400px] px-4 md:px-6 flex-shrink-0">
    <div className="flex justify-between items-start mb-4">
      <div className="flex gap-3 md:gap-4 items-center">
        <img src={image} alt={name} className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shrink-0 border-2 border-gray-50" />
        <div>
          <h4 className="font-extrabold text-[#000044] text-base">{name}</h4>
          <p className="text-gray-400 text-xs mb-1 font-medium">{role}</p>
          <div className="flex gap-0.5 text-yellow-400">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <Star key={i} size={12} fill="currentColor" />
            ))}
          </div>
        </div>
      </div>
      <div className="shrink-0">
        <img
          src={icon}
          alt="quote icon"
          className="w-6 h-6 md:w-8 md:h-8 opacity-90"
        />
      </div>
    </div>
    
    <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium italic">
      "{text}"
    </p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Left Side: Stats and Title */}
        <div className="lg:w-1/3 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#000044] mb-6 leading-[1.1]">
            What our customers are saying us?
          </h2>
          <p className="text-gray-500 text-sm md:text-base mb-8 leading-relaxed max-w-sm">
            Various versions have evolved over the years, sometimes by accident, 
            sometimes on purpose injected humour and the like.
          </p>
          <div className="mt-2 group">
            <span className="text-3xl md:text-4xl font-black text-[#000044] block">10K+</span>
            <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-wider">Happy People</p>
          </div>
        </div>

        {/* Right Side: Cards and Navigation */}
        <div className="lg:w-2/3 border-t-4 lg:border-t-0 lg:border-l-4 border-[#000044] pt-8 lg:pt-4 lg:pl-8 flex flex-col">
          <div className="flex overflow-x-auto no-scrollbar gap-4 pb-4">
            <TestimonialCard 
              image={avatar1} 
              name="Sania Roy" 
              role="Customer" 
              text="Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores."
            />
            {/* Added a second unique card for visual variety */}
            <TestimonialCard 
              image={avatar1} 
              name="John Doe" 
              role="Home Owner" 
              text="The renovation services provided were top-notch. Every detail was handled with care and professional precision. Highly recommended for any home project."
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center lg:justify-start gap-4 px-4 md:px-6 mt-8 md:mt-12">
            <button className="bg-[#000044] text-white p-3 rounded-lg hover:bg-[#33a1fd] transition-all shadow-lg active:scale-95">
              <ArrowLeft size={20} />
            </button>
            <button className="bg-[#000044] text-white p-3 rounded-lg hover:bg-[#33a1fd] transition-all shadow-lg active:scale-95">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;