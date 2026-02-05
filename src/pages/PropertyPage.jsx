import {
  Share2,
  Bookmark,
  MapPin,
  Bed,
  Square,
  Users,
  Train,
  Compass,
  Filter,
  ArrowUpDown,
  Building2,
  Home,
  Check,
  ChevronDown,
} from "lucide-react";

import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import property1 from "../assets/property-1.jpg";
import property2 from "../assets/property-2.jpg";
import property3 from "../assets/property-3.jpg";
import propertyLoc from "../assets/property_loc.png";
import aimLoc from "../assets/Aim_loc.png";

// ALL UI PART
const Feature = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center gap-1 text-xs sm:text-sm text-gray-600">
      {icon}
      <span className="text-center">{label}</span>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="w-full">
    <h3 className="font-bold mb-4">{title}</h3>
    {children}
  </div>
);

const Label = ({ text, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-1 items-center justify-between px-3 py-3 cursor-pointer border rounded-lg"
    >
      <span className="font-medium text-xs sm:text-sm">{text}</span>
      <div
        className={`w-7 h-6 sm:w-9 sm:h-7 flex items-center justify-center rounded ${
          active ? "bg-[#01004C] text-white" : "border border-gray-400"
        }`}
      >
        {active && <Check size={16} />}
      </div>
    </div>
  );
};

const TypeButton = ({ icon, text, active }) => (
  <button
    className={`p-3 rounded-lg text-[10px] sm:text-xs flex flex-col items-center justify-center gap-2 cursor-pointer transition ${
      active
        ? "bg-white text-[#01004C] border-[#01004C] border-2"
        : "border text-gray-600"
    }`}
  >
    {icon}
    <span className="font-medium">{text}</span>
  </button>
);

const Dropdown = ({ text }) => (
  <div className="border rounded-lg px-3 py-2 flex justify-between items-center w-full bg-white">
    <span className="text-sm text-gray-600">{text}</span>
    <ChevronDown size={16} />
  </div>
);

const OutlineBtn = ({ text }) => (
  <button className="flex-1 border py-2 px-1 rounded-lg text-[10px] sm:text-xs font-medium hover:bg-gray-50">
    + {text}
  </button>
);

/* ================= PROPERTY CARD ================= */
const PropertyCardList = ({ image, title, address, price }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col md:flex-row gap-6 mx-auto lg:mx-0"
      style={{ maxWidth: "956.98px", width: "100%", minHeight: "auto" }}
    >
      {/* Image Section */}
      <div
        className="w-full md:w-[363px] h-[250px] md:h-[420px] relative flex-shrink-0 rounded-lg overflow-hidden"
      >
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="bg-white/40 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/60">
            <Share2 size={18} />
          </button>
          <button className="bg-white/40 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/60">
            <Bookmark size={18} />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-grow flex flex-col justify-between py-2">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
            {title}
          </h3>
          <div className="flex items-start gap-2 text-gray-500 mb-4">
            <MapPin size={16} className="text-blue-600 shrink-0 mt-1" />
            <p className="text-sm line-clamp-2">{address}</p>
          </div>
          <div className="text-xl font-bold text-gray-900 mb-6"> ₹ {price} </div>

          {/* Features */}
          <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
            <Feature icon={<Bed size={20} />} label="Semi furnished" />
            <div className="w-[1px] h-10 bg-gray-300" />
            <Feature icon={<Square size={20} />} label="300 sqft" />
            <div className="w-[1px] h-10 bg-gray-300" />
            <Feature icon={<Users size={20} />} label="Family" />
          </div>

          {/* Nearby */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <img src={aimLoc} alt="aim location" className="w-4 h-4" />
              <span>Nearby</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="bg-blue-50 text-black px-2 py-1 rounded-md text-[10px] sm:text-xs flex items-center gap-2"
                >
                  <Train size={12} />
                  <span className="font-poppins">Station</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={() => navigate('/property-detail')}
            className="flex-1 border border-[#01004C] text-[#01004C] hover:bg-[#01004C] hover:text-white py-3 rounded-lg font-semibold transition-all"
          >
            View Details
          </button>
          <button className="flex-1 bg-white border border-[#01004C] text-[#01004C] hover:bg-[#01004C] hover:text-white py-3 rounded-lg font-semibold transition-all">
            Contact Owner
          </button>
        </div>
      </div>
    </div>
  );
};

/* ================= MAIN PAGE ================= */
const PropertyPage = () => {
  const [propertyFor, setPropertyFor] = useState("buy");
  const sidebarRef = useRef(null);
  const [thumbTop, setThumbTop] = useState(0);
  const thumbHeight = 60;

  const handleScroll = () => {
    if (!sidebarRef.current) return;
    const el = sidebarRef.current;
    const ratio = el.scrollTop / (el.scrollHeight - el.clientHeight);
    setThumbTop(ratio * (1320 - thumbHeight));
  };

  const handleDrag = (e) => {
    const startY = e.clientY;
    const startTop = thumbTop;

    const onMove = (ev) => {
      const delta = ev.clientY - startY;
      const newTop = Math.min(Math.max(startTop + delta, 0), 1320 - thumbHeight);
      setThumbTop(newTop);
      const el = sidebarRef.current;
      el.scrollTop = (newTop / (1320 - thumbHeight)) * (el.scrollHeight - el.clientHeight);
    };

    const onUp = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  };

  const properties = Array(3).fill(null).map((_, i) => ({
    id: i,
    image: [property1, property2, property3][i % 3],
    title: "Buy | 2 BHK | Flat in bengaluru",
    address: "No 37, 1st main road No 37, 1st main road...",
    price: "7,000/Month",
  }));

  return (
    <div className="bg-gray-50 min-h-screen py-4 sm:py-8 px-4">
      <div className="max-w-[1728px] mx-auto flex flex-col lg:flex-row gap-6 xl:gap-8 justify-center">
        
        {/* == LEFT SIDEBAR == */}
        <div className="w-full lg:w-[400px] xl:w-[553px] flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm border flex flex-col h-full lg:max-h-[1322px]">
            {/* Tabs */}
            <div className="flex border-b">
              <button className="flex-1 py-4 flex items-center justify-center font-bold text-[#01004C] border-r hover:bg-[#01004C] hover:text-white transition">
                <Filter size={18} className="mr-2" /> Filter
              </button>
              <button className="flex-1 py-4 flex items-center justify-center font-bold text-[#01004C] hover:bg-[#01004C] hover:text-white transition">
                <ArrowUpDown size={18} className="mr-2" /> Sort
              </button>
            </div>

            <div
              ref={sidebarRef}
              onScroll={handleScroll}
              className="p-4 sm:p-6 space-y-8 lg:space-y-10 overflow-y-auto flex-1 hide-scrollbar"
            >
              {/* Buy / Rent */}
              <div className="flex gap-3 sm:gap-4">
                <Label
                  text="Property Buy"
                  active={propertyFor === "buy"}
                  onClick={() => setPropertyFor("buy")}
                />
                <Label
                  text="Property Rent"
                  active={propertyFor === "rent"}
                  onClick={() => setPropertyFor("rent")}
                />
              </div>

              {/* Property Type */}
              <Section title="Property type">
                <div className="grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-2 gap-3">
                  <TypeButton active icon={<Building2 size={24} />} text="Flat/Apartment" />
                  <TypeButton active icon={<Home size={24} />} text="House/Villa" />
                  <TypeButton icon={<Building2 size={24} />} text="Office Space" />
                  <TypeButton icon={<Home size={24} />} text="Plot/Land" />
                  <TypeButton icon={<Building2 size={24} />} text="Shop" />
                  <TypeButton icon={<Home size={24} />} text="Warehouse" />
                </div>
              </Section>

              {/* Bedrooms */}
              <Section title="No of Bedrooms">
                <div className="grid grid-cols-4 gap-2">
                  {Array(8).fill("2BHK").map((b, i) => (
                    <button
                      key={i}
                      className="py-2 rounded border text-[10px] sm:text-xs font-medium text-[#01004C] hover:bg-[#01004C] hover:text-white transition"
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </Section>

              {/* Budget Range */}
              <Section title="Budget Range">
                <div className="flex flex-col sm:flex-row items-center gap-3 mb-4">
                  <Dropdown text="Minimum" />
                  <span className="text-gray-400">to</span>
                  <Dropdown text="Maximum" />
                </div>
                <RangeSlider />
              </Section>

              <Section title="Project type">
                <div className="flex gap-3">
                  <OutlineBtn text="Under Construction" />
                  <OutlineBtn text="Ready to move" />
                </div>
              </Section>

              <div className="border-t pt-4">
                <button className="flex justify-between items-center w-full font-bold text-gray-700">
                  Advance filter
                  <ChevronDown size={20} />
                </button>
              </div>

              <button className="w-full bg-[#01004C] text-white py-4 rounded-xl font-bold uppercase shadow-lg active:scale-95 transition">
                view 2000 property
              </button>
            </div>
          </div>
        </div>

        {/* Custom Scroll Bar - Hidden on Mobile */}
        <div className="hidden lg:block relative" style={{ width: "14px", height: "1320px" }}>
          <div className="bg-gray-200 w-[10px] h-full rounded-full mx-auto" />
          <div
            onMouseDown={handleDrag}
            className="absolute left-0 right-0 mx-auto w-[12px] bg-[#01004C] rounded-full cursor-pointer shadow-md"
            style={{ height: thumbHeight, top: thumbTop }}
          />
        </div>

        {/* Right Section */}
        <div className="w-full flex-grow lg:max-w-[960px]">
          {/* Search */}
          <div className="flex flex-col xl:flex-row xl:items-center gap-4 mb-8">
            <div
              className="bg-white shadow-sm border-2 flex items-center w-full max-w-[676px] h-[60px] sm:h-[70px] rounded-lg px-4"
            >
              <input
                type="text"
                placeholder="Add localities for more results..."
                className="flex-1 h-full outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
              />
              <img src={propertyLoc} alt="location" className="w-8 h-8 sm:w-10 sm:h-10 ml-2" />
            </div>

            <button className="flex items-center gap-2 font-bold text-[#01004C] hover:underline whitespace-nowrap">
              <img src={aimLoc} alt="aim location" className="w-5 h-5" />
              Use my current location
            </button>
          </div>

          {/* Property List */}
          <div className="space-y-6">
            {properties.map((p) => (
              <PropertyCardList key={p.id} {...p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Budget range slider js HELPER
const RangeSlider = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000000);

  return (
    <div className="px-2">
      <div className="flex justify-between text-[10px] sm:text-xs mb-6 font-semibold">
        <span>₹ {min.toLocaleString()}</span>
        <span>₹ {max.toLocaleString()}</span>
      </div>
      <div className="relative h-2 bg-gray-200 rounded-full">
        <div
          className="absolute h-2 bg-[#01004C] rounded-full"
          style={{
            left: `${(min / 1000000) * 100}%`,
            right: `${100 - (max / 1000000) * 100}%`,
          }}
        />
        <input
          type="range"
          min="0"
          max="1000000"
          value={min}
          onChange={(e) => setMin(Math.min(+e.target.value, max - 10000))}
          className="absolute w-full appearance-none bg-transparent pointer-events-none z-20 range-thumb"
          style={{ pointerEvents: 'auto' }}
        />
        <input
          type="range"
          min="0"
          max="1000000"
          value={max}
          onChange={(e) => setMax(Math.max(+e.target.value, min + 10000))}
          className="absolute w-full appearance-none bg-transparent pointer-events-none z-20 range-thumb"
          style={{ pointerEvents: 'auto' }}
        />
      </div>
    </div>
  );
};

export default PropertyPage;