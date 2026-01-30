import React from 'react';
import { Facebook, Linkedin, Phone } from 'lucide-react';
import logo from '../assets/property_logo.png';
import { Link } from 'react-router-dom';

const DIAGONAL_OFFSET = 386; // spacing used in the design

const Footer = () => {
  return (
    <footer className="relative bg-[#01004C] text-white overflow-hidden">

      {/* Diagonal right-side background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: '#44B4FF17',
          clipPath: `polygon(
            calc(100% - ${DIAGONAL_OFFSET}px) 0%,
            100% 0%,
            100% 100%,
            ${DIAGONAL_OFFSET}px 100%
          )`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1728px] mx-auto px-8 pt-16 pb-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">

          {/* Left section */}
          <div className="lg:col-span-4">
            <img src={logo} alt="Nirmana 360" className="h-24 mb-6" />

            <p className="text-lg leading-relaxed max-w-xs">
              High level experience in Constractions and development
            </p>

            <div className="flex gap-4 mt-6">
              {[Facebook, Phone, Linkedin].map((Icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-white rounded flex items-center justify-center text-black"
                >
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>

          {/* Links section */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-10 pt-6">

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
        <div className="border-t border-white/30 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p>
            @ 2025 Company name. All right reserved & design and developed by WASS
          </p>

          <div className="flex gap-8">
            <span>Privacy Policy</span>
            <span>Terms of Condition</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

/*  */
const FooterList = ({ title, items, isLink }) => (
  <div>
    <h3 className="text-2xl mb-6">{title}</h3>

    <ul className="space-y-4">
      {items.map(item => (
        <li key={item} className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-white rounded-full" />
          {isLink ? (
            <Link to="/" className="text-lg hover:text-gray-300">
              {item}
            </Link>
          ) : (
            <span className="text-lg">{item}</span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
