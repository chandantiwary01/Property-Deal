import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

import cementImg from '../../assets/cons_img1.png';
import brickImg from '../../assets/cons_img2.png';
import steelImg from '../../assets/cons_img3.png';
import bannerBg from '../../assets/banner_const.png';
import cons_down from "../../assets/cons_down.png";

const HelpCard = ({ title, image, isPrimary }) => (
  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-50 flex flex-col items-center w-full transition-transform hover:scale-[1.02]">
    <h3 className="text-2xl font-bold text-[#000044] mb-2">{title}</h3>
    <p className="text-gray-400 text-[11px] text-center mb-6 leading-relaxed max-w-[250px]">
      Lorem Ipsum available, but the majority have suffered alteration in some form
    </p>
    <div className="relative w-full rounded-2xl overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 sm:h-56 md:h-48 object-cover" />
      {/* Floating Action Button */}
      <div className="absolute bottom-0 right-0 p-2 bg-white rounded-tl-3xl">
        <button className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all ${
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
    <section className="bg-[#f4faff] py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div className="flex items-center gap-3 sm:gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Constractions Helps</h2>
            <div className="flex items-center">
              <div className="h-[2px] w-10 sm:w-14 bg-blue-300"></div>
              <div className="w-3 h-3 bg-[#3d4272] rotate-45 -ml-1"></div>
            </div>
          </div>
          <a href="#" className="text-blue-400 font-medium flex items-center gap-1 text-sm hover:underline">
            Explore More <span className="text-lg">›</span>
          </a>
        </div>

        {/* Grid - 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          <HelpCard title="Cement" image={cementImg} isPrimary={true} />
          <HelpCard title="Brick" image={brickImg} isPrimary={false} />
          <HelpCard title="Steel" image={steelImg} isPrimary={false} />
        </div>

        {/* Dark Banner Section */}
        <div className="relative rounded-2xl overflow-hidden min-h-[350px] flex items-center p-6 sm:p-10 md:p-12">
          <img 
            src={bannerBg} 
            className="absolute inset-0 w-full h-full object-cover brightness-[0.3]" 
            alt="bg" 
          />
          <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-6">
                <div className="rounded-full flex items-center justify-center bg-white/10 p-2">
                  <img
                    src={cons_down}
                    alt="Construction Down Icon"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Explore Another new projects</h2>
              </div>
              
              <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour...
              </p>
              
              <div className="space-y-4 inline-block text-left">
                {["There are many variations of passages variations of passages", "There are many variations of passages", "There are many variations of variations of pa passages"].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-300 text-xs sm:text-sm">
                    <CheckCircle2 size={18} className="text-gray-500 fill-white shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="shrink-0 w-full lg:w-auto">
              <button className="w-full lg:w-auto bg-[#000033] text-white px-10 py-4 rounded-xl font-bold hover:bg-black transition-all shadow-xl active:scale-95">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionHelps;