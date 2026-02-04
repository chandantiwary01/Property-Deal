import React from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
// Import your images manually
import avatar1 from '../../assets/saniya.png';

const TestimonialCard = ({ image, name, role, text }) => (
  <div className="min-w-[350px] md:min-w-[400px] px-6">
    {/* Card Header */}
    <div className="flex justify-between items-start mb-4">
      <div className="flex gap-4 items-center">
        <img src={avatar1} alt={name} className="w-16 h-16 rounded-full object-cover" />
        <div>
          <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
          <p className="text-gray-400 text-[10px] mb-1">{role}</p>
          <div className="flex gap-0.5 text-yellow-400">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <Star key={i} size={12} fill="currentColor" />
            ))}
          </div>
        </div>
      </div>
      {/* Navy Quote Icon */}
      <div className="text-[#000044]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
        </svg>
      </div>
    </div>
    
    {/* Card Body */}
    <p className="text-gray-700 text-xs leading-relaxed font-medium">
      {text}
    </p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Left Side: Stats and Title */}
        <div className="lg:w-1/3 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            What our customers are saying us?
          </h2>
          <p className="text-gray-500 text-xs mb-8 leading-relaxed max-w-xs">
            Various versions have evolved over the years, sometimes by accident, 
            sometimes on purpose injected humour and the like.
          </p>
          <div className="mt-2">
            <span className="text-2xl font-bold text-gray-900 block">10K+</span>
            <p className="text-gray-400 text-[10px] font-semibold">Happy People</p>
          </div>
        </div>

        {/* Right Side: Vertical Line + Testimonials Wrapper */}
        <div className="lg:w-2/3 border-l-2 border-[#000044] flex flex-col">
          <div className="flex overflow-hidden">
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

          {/* Navigation Buttons */}
          <div className="flex gap-2 px-6 mt-12">
            <button className="bg-[#000044] text-white p-2.5 rounded-sm hover:opacity-90">
              <ArrowLeft size={18} />
            </button>
            <button className="bg-[#000044] text-white p-2.5 rounded-sm hover:opacity-90">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;