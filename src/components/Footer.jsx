import React from 'react';
import { Facebook, Linkedin, Phone } from 'lucide-react';
import logo from '../assets/property_logo.png';
import { Link } from 'react-router-dom';

const DIAGONAL_OFFSET = 386; // spacing used in the design

const Footer = () => {
  return (
    <footer className="relative bg-[#01004C] text-white overflow-hidden">

      {/* Diagonal right-side background */}
      {/* Added max/min logic to clipPath to ensure it scales on screens narrower than 386px */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: '#44B4FF17',
          clipPath: `polygon(
            max(0%, calc(100% - ${DIAGONAL_OFFSET}px)) 0%, 
            100% 0%, 
            100% 100%, 
            min(100%, ${DIAGONAL_OFFSET}px) 100%
          )`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1728px] mx-auto px-6 sm:px-8 lg:px-12 pt-12 md:pt-16 pb-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 mb-14">

          {/* Left section */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <img
              src={logo}
              alt="Nirmana 360"
              className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto mb-6 object-contain"
            />

            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xs">
              High level experience in Constractions and development
            </p>

            <div className="flex gap-4 mt-6">
              {[Facebook, Phone, Linkedin].map((Icon, index) => (
                <div
                  key={index}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded flex items-center justify-center text-black hover:scale-105 transition cursor-pointer"
                >
                  {/* Corrected size class to fit within the 40px container */}
                  <Icon size={18} className="sm:w-5 sm:h-5" />
                </div>
              ))}
            </div>
          </div>

          {/* Links section */}
          <div className="lg:col-span-8 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-6 pt-2 sm:pt-4 md:pt-6">

            {/* Links */}
            <FooterList
              title="Links"
              items={['Home', 'Property', 'Constraction', 'Offer', 'Helps']}
              isLink
            />

            {/* Property */}
            <FooterList
              title="Property"
              items={['Rent', 'Buy', 'Sell']}
            />

            {/* Construction */}
            <FooterList
              title="Constraction"
              items={['Cement', 'Brick', 'Steel', 'Iron', 'Sand']}
            />

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/30 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left text-xs sm:text-sm md:text-base">
          <p className="max-w-md">
            @ 2025 Company name. All right reserved & design and developed by WASS
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <span className="cursor-pointer hover:underline whitespace-nowrap">Privacy Policy</span>
            <span className="cursor-pointer hover:underline whitespace-nowrap">Terms of Condition</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

/* Footer List Component */
const FooterList = ({ title, items, isLink }) => (
  <div className="min-w-[120px]">
    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-6">
      {title}
    </h3>

    <ul className="space-y-3 md:space-y-4">
      {items.map(item => (
        <li key={item} className="flex items-center gap-3 group">
          <span className="w-1.5 h-1.5 bg-white rounded-full shrink-0 group-hover:bg-blue-400 transition-colors" />
          {isLink ? (
            <Link to="/" className="text-sm sm:text-base md:text-lg hover:text-gray-300 transition-colors">
              {item}
            </Link>
          ) : (
            <span className="text-sm sm:text-base md:text-lg cursor-default">{item}</span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;