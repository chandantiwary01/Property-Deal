import React from "react";
import { Facebook, Linkedin, MessageCircle  } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/property_logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#01004C] text-white px-4 sm:px-6 lg:px-8 pt-16 pb-8 overflow-hidden">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
        {/* Logo & Info */}
        <div>
          <img
            src={logo}
            alt="Nirmana 360"
            className="h-16 mb-4 bg-white/10 p-2 rounded"
          />

          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            High level experience in Constractions and development
          </p>

          <div className="flex items-center gap-4 mt-6">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded bg-white text-[#01004C] hover:bg-gray-200 transition"
            >
              <Facebook size={18} />
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded bg-white text-[#01004C] hover:bg-gray-200 transition"
            >
              <MessageCircle  size={18} />
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded bg-white text-[#01004C] hover:bg-gray-200 transition"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              <Link to="/buy" className="hover:text-white transition">
                Property
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              <Link to="/construction" className="hover:text-white transition">
                Constraction
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              <a href="#" className="hover:text-white transition">
                Offer
              </a>
            </li>

            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              <a href="#" className="hover:text-white transition">
                Helps
              </a>
            </li>
          </ul>
        </div>

        {/* Property */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Property</h3>
          <ul className="space-y-3 text-gray-300">
            {["Rent", "Buy", "Sell"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                <a href="#" className="hover:text-white transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Construction */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Constraction</h3>
          <ul className="space-y-3 text-gray-300">
            {["Cement", "Brick", "Steel", "Iron", "Sand"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                <a href="#" className="hover:text-white transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
        <p className="text-center md:text-left">
          © 2025 Company name. All right reserved & design and developed by WASS
        </p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms of Condition
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
