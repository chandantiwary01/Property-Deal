import React from 'react';

import painting1 from '../../assets/offer_paint.png';
import painting2 from '../../assets/offer_paint.png';

const OfferCard = ({ image, title, bgColor }) => (
  // Changed flex-row to flex-col for mobile and sm:flex-row for larger screens
  <div className={`${bgColor} rounded-1xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between shadow-sm h-full gap-6`}>
    
    {/* Text Content Area - Centered on mobile, left-aligned on sm+ */}
    <div className="flex-1 text-center sm:text-left flex flex-col items-center sm:items-start">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
        {title}
      </h3>
      <p className="text-gray-500 text-[10px] md:text-xs mb-6 md:mb-8 leading-relaxed max-w-[280px] sm:max-w-none">
        Lorem Ipsum has been Ipsum has beenLorem Ipsum has been Ipsum has been Ipsum
        has beenLorem Ipsum has been Ipsum has been Lorem Ipsum has been Ipsum has 
        been Ipsum has beenLorem Ipsum een Ipsum has been
      </p>
      <button className="bg-[#000044] text-white px-8 md:px-10 py-3 rounded-lg font-bold text-sm hover:bg-blue-400 transition-all active:scale-95 w-full  sm:w-[205px]
    h-[51px]">
        View More
      </button>
    </div>

    {/* Image Area - Responsive width adjustment */}
    <div className="w-1/2 sm:w-1/3 flex justify-center sm:justify-end">
      <img 
        src={image} 
        alt="Offer Illustration" 
        className="max-w-full h-auto object-contain max-h-[150px] sm:max-h-none" 
      />
    </div>
  </div>
);

const Offers = () => {
  return (
    // Adjusted padding for mobile responsiveness
    <section className="py-8 md:py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Grid: 1 column on mobile/tablet, 2 columns on large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OfferCard 
          image={painting1} 
          title="Flat 30% off on Home Painting" 
          bgColor="bg-[#44B4FF33]" // Light blue background
        />
        <OfferCard 
          image={painting2} 
          title="Flat 30% off on Home Painting" 
          bgColor="bg-[#01004C0F]" // Light gray background
        />
      </div>
    </section>
  );
};

export default Offers;