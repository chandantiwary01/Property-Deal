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
  Crosshair,
} from "lucide-react";

import { useState } from "react";
import property1 from "../assets/property-1.jpg";
import property2 from "../assets/property-2.jpg";
import property3 from "../assets/property-3.jpg";
import propertyLoc from "../assets/property_loc.png";
import aimLoc from "../assets/Aim_loc.png";



/* ================= PROPERTY CARD ================= */
const PropertyCardList = ({ image, title, address, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col md:flex-row gap-6" style={{
    width: "956.98px",
    height: "480px",
  }}>

      {/* Image Section */}
      <div className="w-full md:w-72 h-64 md:h-auto relative flex-shrink-0 rounded-lg overflow-hidden" style={{
    width: "363.2px",
    height: "459px",
  }}>
        <img src={image} alt={title} className="w-full h-full object-cover" />

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white">
            <Share2 size={18} />
          </button>
          <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white">
            <Bookmark size={18} />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>

          <div className="flex items-start gap-2 text-gray-500 mb-4">
            <div className="mt-1 bg-blue-100 p-1 rounded-full">
              <MapPin size={14} className="text-blue-600" />
            </div>
            <p className="text-sm">{address}</p>
          </div>

          <div className="text-xl font-bold text-gray-900 mb-6">
            ₹ {price}
          </div>

          {/* Features */}
          <div className="flex justify-between max-w-md mb-6 border-b border-gray-100 pb-4">
            <Feature icon={<Bed size={20} />} label="Semi furnished" />
            <div className="w-[2px] h-[60px] bg-[#8A8A8A] mx-auto my-1" />

            <Feature icon={<Square size={20} />} label="300 sqft" />
            <div className="w-[2px] h-[60px] bg-[#8A8A8A] mx-auto my-1" />

            <Feature icon={<Users size={20} />} label="Family" />
          </div>

          {/* Nearby */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <img
    src={aimLoc}
    alt="aim location"
    className="w-5 h-5"
  />
              <span>Nearby</span>
            </div>
            <div className="flex gap-2">
              {[1, 2,3].map((_, i) => (
                <div
                  key={i}
                  className="bg-blue-50 text-black-700 px-3 py-1 rounded-md text-xs flex items-center gap-3"
                >
                  <Train size={12} />
                  <span className="ml-2 font-poppins ">Station</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 border hover:bg-[#01004C] hover:text-white text-[#01004C] py-3 rounded-lg font-medium transition-transform duration-200">
            View Details
          </button>
          <button className="flex-1 border border-[#01004C] text-[#01004C] hover:bg-[#01004C] hover:text-white py-3 rounded-lg font-medium transition-transform duration-200">
            Contact Owner
          </button>
        </div>
      </div>
    </div>
  );
};

/* ================= MAIN PAGE ================= */
const PropertyPage = () => {
  const properties = Array(3)
    .fill(null)
    .map((_, i) => ({
      id: i,
      image: [property1, property2, property3][i % 3],
      title: "Buy | 2 BHK | Flat in bengaluru",
      address: "No 37, 1st main road No 37, 1st main road...",
      price: "7,000/Month",
    }));

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

        {/* ================= SIDEBAR ================= */}
        <div className="w-full lg:w-80">
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

            {/* Tabs */}
            <div className="flex border-b">
              <button className="flex-1 py-4 flex items-center justify-center gap-2 font-bold text-[#01004C] border-b-2 border-[#01004C]">
                <Filter size={20} /> Filter
              </button>
              <button className="flex-1 py-4 flex items-center justify-center gap-2 text-gray-500">
                <ArrowUpDown size={20} /> Sort
              </button>
            </div>

            <div className="p-6 space-y-8">

              {/* Buy / Rent */}
              <div className="flex justify-between ml-2">
                <Label text="Property Buy" />
                <Label text="Property Rent" />
              </div>

              {/* Property Type */}
              <Section title="Property type">
                <div className="grid grid-cols-2 gap-3">
                  <TypeButton active icon={<Building2 size={30} />} text="Flat/Apartment" />

                  <TypeButton active icon={<Home size={30} />} text="House/Villa" />
                  <TypeButton active icon={<Building2 size={30} />} text="House/Villa" />
                  <TypeButton active icon={<Home size={30} />} text="House/Villa" />
                  <TypeButton active icon={<Building2 size={30} />} text="House/Villa" />
                  <TypeButton active icon={<Home size={30} />} text="House/Villa" />
                </div>
              </Section>

              {/* Bedrooms */}
              <Section title="No of Bedrooms">
                <div className="grid grid-cols-4 gap-2">
                  {Array(8).fill("2BHK").map((b, i) => (
                    <button
                      key={i}
                      className={`py-2 rounded text-xs font-medium ${
                        i === 0
                          ? "bg-white border text-[#01004C] hover:bg-[#01004C] hover:text-white"
                          : "bg-white border text-[#01004C] hover:bg-[#01004C] hover:text-white"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </Section>

              {/* Budget Range */}
              <Section title="Budget Range">
                <div className="flex gap-4 mb-4">
                  <Dropdown text="Minimun" />
                  <span className="text-gray-400">to</span>
                  <Dropdown text="Maximum" />
                </div>
                <RangeSlider />
              </Section>

              {/* Project Type */}
              <Section title="Project type">
                <div className="flex gap-3">
                  <OutlineBtn text="Under Constraction" />
                  <OutlineBtn text="Ready to move" />
                </div>
              </Section>

              {/* Advance Filter */}
              <div className="border-t pt-4">
                <button className="flex justify-between w-full font-medium">
                  Advance filter
                  <ChevronDown size={20} />
                </button>
              </div>

              <button className="w-full bg-[#01004C] text-white py-4 rounded-xl font-bold uppercase">
                view 2000 property
              </button>
            </div>
          </div>
        </div>

        {/*   Location */}
        <div className="flex-grow">

          {/* Search */}
          <div className="flex items-center gap-6 mb-8">

  {/* Search Box */}
  <div
    className="bg-white shadow-sm border-2 flex items-center"
    style={{
      width: "676px",
      height: "70px",
      borderRadius: "6px",
    }}
  >
    <input
      type="text"
      placeholder="Add localities for more resuls..."
      className="flex-1 h-full px-6 outline-none text-gray-700 placeholder-gray-400"
    />

    <div className="pr-6">
      <img
        src={propertyLoc}
        alt="location"
        className="w-12 h-12"
      />
    </div>
  </div>

  {/* Outside Button */}
  <button className="flex items-center gap-3 font-bold text-[#01004C]">
  <img
    src={aimLoc}
    alt="aim location"
    className="w-5 h-5"
  />
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

/* ================= SMALL UI HELPERS ================= */
const Feature = ({ icon, label }) => (
  <div className="text-center">
    <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
      {icon}
    </div>
    <p className="text-xs text-gray-500">{label}</p>
  </div>
);

const Section = ({ title, children }) => (
  <div>
    <h3 className="font-bold mb-4">{title}</h3>
    {children}
  </div>
);

{/*ON CLICK CHECK */}

const Label = ({ text }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div
      className="flex items-center gap-3 cursor-pointer"
      onClick={() => setChecked(!checked)}
    >
      <span className="font-medium">{text}</span>

      <div
        className={`w-6 h-6 rounded flex items-center justify-center transition ${
          checked
            ? "bg-[#01004C] text-white"
            : "border hover:bg-[#01004C]/10"
        }`}
      >
        {checked && <Check size={17} />}
      </div>
    </div>
  );
};


const TypeButton = ({ icon, text, active }) => (
  <button className={`p-3 rounded-lg text-xs flex flex-col items-center gap-2 cursor-pointer ${
    active ? "bg-white text-[#01004C] hover:bg-[#01004C] hover:text-white border" : "border text-gray-600"
  }`}>
    {icon}
    {text}
  </button>
);

const Dropdown = ({ text }) => (
  <div className="border rounded-lg px-3 py-2 flex justify-between items-center w-full">
    <span className="text-sm text-gray-600">{text}</span>
    <ChevronDown size={16} />
  </div>
);

const RangeSlider = () => (
  <div className="relative h-1 bg-gray-200 rounded-full mt-6">
    <div className="absolute inset-0 bg-[#01004C] rounded-full"></div>
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#01004C] rounded-full"></div>
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#01004C] rounded-full"></div>
  </div>
);

const OutlineBtn = ({ text }) => (
  <button className="flex-1 border py-2 rounded-lg text-xs font-medium">
    + {text}
  </button>
);

export default PropertyPage;
