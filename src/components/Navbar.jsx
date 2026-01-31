import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/property_logo.png";
import icon1 from "../assets/navbar_R8_icon.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#01004C] w-full sticky top-0 z-50">
      <div className="relative max-w-[1728px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="absolute top-[18px] left-[100px]">
          <img
            src={logo}
            alt="Logo"
            className="w-[104px] h-[85px] object-contain cursor-pointer"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-[60px] ml-[450px] text-white font-['Poppins'] font-[600] text-[25px] transition hover:text-[#41B3FF]">

           <Link to="/" className="cursor-pointer">
  Home
</Link>
          <Link to="/property" className="cursor-pointer">Property</Link>
          <Link to="/construction" className="cursor-pointer">
  Construction
</Link>

          <span className="cursor-pointer">Offer</span>
          <span className="cursor-pointer">Help</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-15 ">
          <button
            className="
              hidden sm:flex
              w-[250px] h-[62px]
              items-center justify-center
              bg-white text-[#01004C]
              rounded-[6px]
              font-[700] text-[25px]
              font-['Poppins'] transition hover:text-[#41B3FF] cursor-pointer
            "
          >
            Sell Your Property
          </button>

          <div className="w-[65px] h-[65px] rounded-[54px] bg-white flex items-center justify-center">
            <img src={icon1} alt="icon" className="w-10 h-10 object-contain cursor-pointer" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#01004C] transition hover:text-black px-4 pb-4 border-t border-white/10">
          <div className="flex flex-col gap-4 text-white font-medium mt-4">
            <span>Home</span>
            <span>Property</span>
            <span>Constraction</span>
            <span>Offer</span>
            <span>Help</span>

            <button className="mt-2 bg-white text-[#01004C] py-2 rounded-md font-semibold">
              Sell Your Property
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
