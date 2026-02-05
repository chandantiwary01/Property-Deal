import React from 'react';
import { 
  Share2, Bookmark, MapPin, Navigation, Train, 
  Sofa, Maximize, Users, BedDouble, 
  Wind, ShieldCheck, Battery,  
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import local images as needed
import property1 from "../assets/Detail_img.png";
import MapView from "../assets/Map_View.png";
import elevatorIcon from "../assets/Lift_D.png"; 
import parkingIcon from "../assets/Parking.png";
import other1 from "../assets/prop_1.png";
import other2 from "../assets/prop_2.png";
import other3 from "../assets/prop_3.png";


// Sub-component for Amenity items
const AmenityItem = ({ icon: Icon, customSrc, label }) => (
  <div className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-lg">
    <div className="bg-gray-50 p-3 rounded-md mb-2 flex items-center justify-center w-12 h-12">
      {Icon ? (
        <Icon size={24} className="text-[#01004C]" />
      ) : (
        <img src={customSrc} alt={label} className="w-6 h-6 object-contain" />
      )}
    </div>
    <span className="text-sm font-semibold text-gray-700">{label}</span>
  </div>
);

// Sub-component for the "Other Properties" cards
const OtherPropertyCard = ({ image }) => (
  <div className="min-w-[300px] bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
    <div className="relative h-48">
      <img src={image} alt="property" className="w-full h-full object-cover" />
      <div className="absolute top-3 right-3 flex flex-col gap-2">
        <button className="bg-white/80 p-1.5 rounded-full shadow-md"><Share2 size={16} className="text-[#01004C]" /></button>
        <button className="bg-[#01004C] p-1.5 rounded-full shadow-md text-white"><Bookmark size={16} /></button>
      </div>
    </div>
    <div className="p-4">
      <h4 className="font-bold text-[#01004C] text-sm">Rent for 2BHK Flat in bengaluru</h4>
      <div className="flex items-start gap-1 mt-1 mb-3">
        <MapPin size={12} className="text-blue-500 mt-1 flex-shrink-0" />
        <p className="text-[10px] text-gray-500">No 37, 1st main road No 37, 1st main road No 37, 1st main road...</p>
      </div>
      <div className="flex justify-between items-center text-[10px] text-gray-600 mb-4 px-2">
        <div className="flex flex-col items-center"><Sofa size={14} /><span>Semi furnished</span></div>
        <div className="flex flex-col items-center"><Maximize size={14} /><span>500 Sqft</span></div>
        <div className="flex flex-col items-center"><Users size={14} /><span>Family</span></div>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold text-[#01004C]">₹ 7,000/Month</span>
        <button className="bg-[#01004C] text-white px-4 py-1.5 rounded text-xs font-bold">View Details</button>
      </div>
    </div>
  </div>
);

const PropertyDetailPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-7xl mx-auto p-4 lg:p-8">
        
        {/* Main Hero Image Section */}
        <div className="relative rounded-2xl overflow-hidden h-[400px] mb-8">
          <img 
            src={property1}
            alt="Main Property" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 right-6 flex flex-col gap-3">
            <button className="bg-white p-2 rounded-full shadow-lg"><Share2 size={24} className="text-[#01004C]" /></button>
            <button className="bg-[#01004C] p-2 rounded-full shadow-lg text-white"><Bookmark size={24} /></button>
          </div>
        </div>

        {/* Property Title & Rent Header */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-[#01004C] mb-2">2 BHK Flat In The Woodrose Apartment for Rent In Bangalore</h1>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <MapPin size={18} className="text-blue-500" />
                <span>No 37, 1st main road No 37, 1st main road...No 37, 1st main road...</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
               <div className="text-xl font-extrabold text-[#01004C]">
                 Rent <span className="ml-4">₹ 7,000/Month</span>
               </div>
               <div className="flex gap-2">
                 <button className="flex items-center gap-1 bg-blue-50 text-[#01004C] px-3 py-2 rounded-lg text-sm font-bold border border-blue-100">
                   <Navigation size={16} /> Nearby
                 </button>
                 <button className="flex items-center gap-1 bg-blue-50 text-[#01004C] px-3 py-2 rounded-lg text-sm font-bold border border-blue-100">
                   <Train size={16} /> Station
                 </button>
                 <button className="flex items-center gap-1 bg-blue-50 text-[#01004C] px-3 py-2 rounded-lg text-sm font-bold border border-blue-100">
                   <Train size={16} /> Station
                 </button>
               </div>
            </div>
          </div>

          {/* Overview Icons Row */}
          <div className="mt-8 pt-8 border-t border-gray-100">
            <h3 className="text-lg font-bold text-[#01004C] mb-6">Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="flex flex-col items-center border-r border-gray-100 last:border-0">
                <Sofa size={28} className="text-[#01004C] mb-2" />
                <span className="text-xs font-semibold text-gray-600">Semifurnished</span>
              </div>
              <div className="flex flex-col items-center border-r border-gray-100 last:border-0">
                <Maximize size={28} className="text-[#01004C] mb-2" />
                <span className="text-xs font-semibold text-gray-600">500 Sqft</span>
              </div>
              <div className="flex flex-col items-center border-r border-gray-100 last:border-0">
                <Users size={28} className="text-[#01004C] mb-2" />
                <span className="text-xs font-semibold text-gray-600">Family</span>
              </div>
              <div className="flex flex-col items-center border-r border-gray-100 last:border-0">
                <BedDouble size={28} className="text-[#01004C] mb-2" />
                <span className="text-xs font-semibold text-gray-600">Semifurnished</span>
              </div>
              <div className="flex flex-col items-center last:border-0">
                <BedDouble size={28} className="text-[#01004C] mb-2" />
                <span className="text-xs font-semibold text-gray-600">3 Bedroom</span>
              </div>
            </div>
          </div>
        </div>

        {/* Descriptions Section */}
        <section className="mb-10">
          <h3 className="text-xl font-bold text-[#01004C] mb-4">Descriptions</h3>
          <p className="text-gray-500 leading-relaxed text-sm">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English...
          </p>
        </section>

        {/* Amenities Section */}
        <section className="mb-10">
          <h3 className="text-xl font-bold text-[#01004C] mb-6">Amenities</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
           <AmenityItem customSrc={elevatorIcon} label="Lift Facility" />
            <AmenityItem icon={Wind} label="Air Conditioner" />
            <AmenityItem icon={ShieldCheck} label="Security" />
            <AmenityItem icon={Battery} label="Power Backup" />
            <AmenityItem customSrc={parkingIcon} label="Parking" />
            <AmenityItem icon={Battery} label="Power Backup" />
            <AmenityItem customSrc={parkingIcon} label="Parking" />
          </div>
        </section>

        {/* Transport, Essentials, Location */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Transport */}
          <div>
            <div className="flex border-b-2 border-[#01004C] pb-2 mb-6">
              <h3 className="text-xl font-bold text-[#01004C]">Trasport</h3>
              <h3 className="text-xl font-bold text-gray-400 ml-12">Essentials</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#01004C] font-bold mb-4">
                <Train size={20} />
                <span>Railway Station</span>
              </div>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex justify-between text-sm text-gray-600 border-b border-gray-50 pb-2">
                  <span>Kolkata</span>
                  <span className="font-semibold">25 km</span>
                </div>
              ))}
            </div>
          </div>

          {/* Space for  empty space  */}
          <div></div>

          {/* Location / Map */}
          <div>
            <h3 className="text-xl font-bold text-[#01004C] mb-6">Location</h3>
            <div className="rounded-xl overflow-hidden border border-gray-200 h-64 relative bg-gray-100">
               
               <img 
                 src={MapView}
                 className="w-full h-full object-cover  opacity-75" 
                 alt="Map Placeholder"
               />
               
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mb-16">
          <button className="flex-1 border-2 border-[#01004C] text-[#01004C] py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors">
            I am Intersted
          </button>
          <button className="flex-1 bg-[#01004C] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#0a093a] transition-colors shadow-lg shadow-blue-900/20">
            Contact Owner
          </button>
        </div>

        {/* Others Property Section */}
        <section>
  <h3 className="text-xl font-bold text-[#01004C] mb-6">
    Others Property in this projects near by
  </h3>

  <div className="flex overflow-x-auto gap-6 pb-6 no-scrollbar">
    <OtherPropertyCard image={other1} />
    <OtherPropertyCard image={other2} />
    <OtherPropertyCard image={other3} />
  </div>
</section>


      </div>
    </div>
  );
};

export default PropertyDetailPage;