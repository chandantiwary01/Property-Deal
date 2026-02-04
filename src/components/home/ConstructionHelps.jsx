import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';


import cementImg from '../../assets/cons_img1.png';
import brickImg from '../../assets/cons_img2.png';
import steelImg from '../../assets/cons_img3.png';
import bannerBg from '../../assets/banner_const.png';
import cons_down from "../../assets/cons_down.png";


const HelpCard = ({ title, image, isPrimary }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50 flex flex-col items-center">
    <h3 className="text-2xl font-bold text-[#000044] mb-2">{title}</h3>
    <p className="text-gray-400 text-[11px] text-center mb-6 leading-relaxed">
      Lorem Ipsum available, but the majority have suffered alteration in some form
    </p>
    <div className="relative w-full rounded-2xl overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      {/* Floating Action Button */}
      <div className="absolute bottom-0 right-0 p-2 bg-white rounded-tl-3xl">
        <button className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
          isPrimary ? 'bg-[#000044] text-white' : 'border-2 border-[#000044] text-[#000044]'
        }`}>
          <ArrowUpRight size={20} />
        </button>
      </div>
    </div>
  </div>
);

const ConstructionHelps = () => {
  return (
    <section className="bg-[#f4faff] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-gray-900">Constractions Helps</h2>
            <div className="flex items-center">
              <div className="h-[2px] w-14 bg-blue-300"></div>
              <div className="w-3 h-3 bg-[#3d4272] rotate-45 -ml-1"></div>
            </div>
          </div>
          <a href="#" className="text-blue-400 font-medium flex items-center gap-1 text-sm">
            Explore More <span className="text-lg">›</span>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <HelpCard title="Cement" image={cementImg} isPrimary={true} />
          <HelpCard title="Brick" image={brickImg} isPrimary={false} />
          <HelpCard title="Steel" image={steelImg} isPrimary={false} />
        </div>

        {/* Dark Banner Section */}
        <div className="relative rounded-xl overflow-hidden min-h-[300px] flex items-center p-10">
          <img src={bannerBg} className="absolute inset-0 w-full h-full object-cover brightness-[0.3]" alt="bg" />
          <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
               <div className=" rounded-full flex items-center justify-center">
  <img
    src={cons_down}
    alt="Construction Down Icon"
    className="w-6 h-6 object-contain"
  />
</div>

                <h2 className="text-2xl font-bold text-white">Explore Another new projects</h2>
              </div>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour...
              </p>
              <div className="space-y-3">
                {["There are many variations of passages variations of passages", "There are many variations of passages", "There are many variations of variations of pa passages"].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300 text-xs">
                    <CheckCircle2 size={16} className="text-gray-500 fill-white" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
            <button className="bg-[#000033] text-white px-10 py-4 rounded-lg font-bold hover:bg-black transition-all">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionHelps;