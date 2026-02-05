import React from 'react';

import appDownload from '../../assets/app_img.png';

const AppDownload = () => {
  return (
    <section className="py-8 md:py-16 px-4 md:px-6 max-w-7xl mx-auto">
      {/* Main Container with rounded corners and overflow hidden */}
      <div className="bg-[#000033] rounded-2xl overflow-hidden flex flex-col md:flex-row min-h-[450px]">
        
        {/* Left Side: Content Area with Gradient */}
        <div className="w-full md:w-[60%] p-8 sm:p-12 md:p-16 flex flex-col justify-center items-center md:items-start text-center md:text-left text-white bg-gradient-to-br md:bg-gradient-to-r from-[#000022] to-[#2563eb]">
          
          {/* Badge */}
          <div className="w-fit bg-white/10 px-4 py-1.5 rounded-full text-[10px] font-medium mb-6 md:mb-8">
            Start today
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Download the App
          </h2>
          
          <p className="text-gray-200 text-sm sm:text-base mb-8 md:mb-10 leading-relaxed max-w-sm md:max-w-md">
            Take classes on the go with the just home app. Stream or download 
            to watch on the plane, the subway, or wherever you learn best.
          </p>
          
          {/* Google Play Button */}
          <button className="bg-white text-black px-5 py-2.5 rounded-xl flex items-center gap-3 w-fit hover:bg-gray-100 transition-all active:scale-95 shadow-lg">
            
            <div className="flex gap-0.5">
               <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-blue-600 border-b-[8px] border-b-transparent"></div>
            </div>
            
            <div className="text-left border-l border-gray-300 pl-3">
              <p className="text-[9px] text-gray-500 font-bold uppercase leading-tight tracking-wider">Get it on</p>
              <p className="text-lg font-bold leading-none">Google Play</p>
            </div>
          </button>
        </div>
        
        {/* Right Side: Image Area */}
        <div className="w-full md:w-[40%] h-72 sm:h-96 md:h-auto overflow-hidden">
          <img 
            src={appDownload} 
            alt="Phone App" 
            className="w-full h-full object-cover object-top md:object-center" 
          />
        </div>

      </div>
    </section>
  );
};

export default AppDownload;