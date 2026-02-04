import React from 'react';

import painting1 from '../../assets/offer_paint.png';
import painting2 from '../../assets/offer_paint.png';

const OfferCard = ({ image, title, bgColor }) => (
  <div className={`${bgColor} rounded-lg p-8 flex flex-row items-center justify-between shadow-sm h-full`}>
    {/* Text Content Area */}
    <div className="flex-1 pr-4">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
        {title}
      </h3>
      <p className="text-gray-500 text-[10px] mb-8 leading-relaxed max-w-[280px]">
        Lorem Ipsum has been Ipsum has beenLorem Ipsum has been Ipsum has been Ipsum
        has beenLorem Ipsum has been Ipsum has been Lorem Ipsum has been Ipsum has 
        been Ipsum has beenLorem Ipsum een Ipsum has been
      </p>
      <button className="bg-[#000044] text-white px-10 py-3 rounded-md font-bold text-sm hover:opacity-90 transition-opacity">
        View More
      </button>
    </div>

    {/* Image Area */}
    <div className="w-1/3 flex justify-end">
      <img 
        src={image} 
        alt="Offer Illustration" 
        className="max-w-full h-auto object-contain" 
      />
    </div>
  </div>
);

const Offers = () => {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
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