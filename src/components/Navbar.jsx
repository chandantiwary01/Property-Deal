import React, { useState } from "react";
import { Menu, X, User } from "lucide-react";
import logo from "../assets/property_logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#01004C] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center ml-15">
          <img
            src={logo}
            alt="Logo"
            className="h-12 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">Property</span>
          <span className="cursor-pointer">Constraction</span>
          <span className="cursor-pointer">Offer</span>
          <span className="cursor-pointer">Help</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block bg-white text-[#01004C] px-5 py-2 rounded-md font-semibold">
            Sell Your Property
          </button>

          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <User className="text-[#01004C] w-6 h-6" />
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

      {/* Mobile Menu Structure */}
      {menuOpen && (
        <div className="md:hidden bg-[#01004C] px-4 pb-4 border-t border-white/10">
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
