import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/property_logo.png";
import icon1 from "../assets/icon_360.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#01004C] w-full sticky top-0 z-50">
      {/* Container: Max width with centered content */}
      <div className="max-w-[1728px] mx-auto px-4 sm:px-6 lg:px-10 py-2 lg:py-4 flex items-center justify-between">
        
        {/* Logo Section - Removed absolute positioning to allow natural flow */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-[60px] h-auto sm:w-[80px] lg:w-[104px] object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Menu - responsiveness */}
        <div className="hidden md:flex items-center justify-center flex-grow gap-6 lg:gap-10 xl:gap-[60px] text-white font-['Poppins'] font-[600] md:text-[18px] lg:text-[22px] xl:text-[25px]">
          <Link to="/" className="cursor-pointer hover:text-[#41B3FF] transition whitespace-nowrap">
            Home
          </Link>
          <Link to="/property" className="cursor-pointer hover:text-[#41B3FF] transition whitespace-nowrap">
            Property
          </Link>
          <Link to="/construction" className="cursor-pointer hover:text-[#41B3FF] transition whitespace-nowrap">
            Construction
          </Link>
          <span className="cursor-pointer hover:text-[#41B3FF] transition whitespace-nowrap">Offer</span>
          <span className="cursor-pointer hover:text-[#41B3FF] transition whitespace-nowrap">Help</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 lg:gap-8 xl:gap-15">
          {/* Button: Hidden on mobile/tablet, shown on large screens */}
          <button
            className="
              hidden xl:flex
              w-[220px] 2xl:w-[250px] h-[55px] lg:h-[62px]
              items-center justify-center
              bg-white text-[#01004C]
              rounded-[6px]
              font-[700] text-[18px] lg:text-[22px] xl:text-[25px]
              font-['Poppins'] transition hover:bg-[#41B3FF] hover:text-white cursor-pointer
            "
          >
            Sell Your Property
          </button>

          {/* Profile/Icon */}
          <div className="w-[40px] h-[40px] lg:w-[55px] lg:h-[55px] xl:w-[65px] xl:h-[65px] rounded-full  flex items-center justify-center shrink-0">
            <img
              src={icon1}
              alt="icon"
              className="w-15 h-15 lg:w-8 lg:h-8 xl:w-10 xl:h-10 object-contain cursor-pointer"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#01004C] border-t border-white/10 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4 text-white font-semibold p-6 text-lg">
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[#41B3FF]">Home</Link>
            <Link to="/property" onClick={() => setMenuOpen(false)} className="hover:text-[#41B3FF]">Property</Link>
            <Link to="/construction" onClick={() => setMenuOpen(false)} className="hover:text-[#41B3FF]">Construction</Link>
            <span className="hover:text-[#41B3FF] cursor-pointer">Offer</span>
            <span className="hover:text-[#41B3FF] cursor-pointer">Help</span>

            <button className="mt-4 bg-white text-[#01004C] py-4 rounded-md font-bold text-xl active:bg-[#41B3FF] active:text-white transition">
              Sell Your Property
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;