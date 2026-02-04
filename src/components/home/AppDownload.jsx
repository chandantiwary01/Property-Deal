import React from 'react';
// I will use your imported name
import appDownload from '../../assets/app_img.png';

const AppDownload = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Main Container with rounded corners and overflow hidden */}
      <div className="bg-[#000033] rounded-lg overflow-hidden flex flex-col md:flex-row min-h-[400px]">
        
        {/* Left Side: Content Area with Gradient */}
        <div className="w-full md:w-[60%] p-8 md:p-16 flex flex-col justify-center text-white bg-gradient-to-r from-[#000022] to-[#2563eb]">
          
          {/* Badge */}
          <div className="w-fit bg-white/10 px-4 py-1.5 rounded-full text-[10px] font-medium mb-8">
            Start today
          </div>

          <h2 className="text-4xl font-bold mb-6">Download the App</h2>
          
          <p className="text-gray-200 text-sm md:text-base mb-10 leading-relaxed max-w-md">
            Take classes on the go with the just home app. Stream or download 
            to watch on the plane, the subway, or wherever you learn best.
          </p>
          
          {/* Google Play Button */}
          <button className="bg-white text-black px-4 py-2 rounded-md flex items-center gap-3 w-fit hover:bg-gray-100 transition-colors">
            
            <div className="flex gap-0.5">
               <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-blue-500 border-b-[8px] border-b-transparent"></div>
            </div>
            
            <div className="text-left border-l border-gray-300 pl-3">
              <p className="text-[8px] text-gray-500 font-semibold uppercase leading-tight">Get it on</p>
              <p className="text-base font-bold leading-none">Google Play</p>
            </div>
          </button>
        </div>
        
        {/* Right Side: Image Area */}
        <div className="w-full md:w-[40%] h-64 md:h-auto">
          <img 
            src={appDownload} 
            alt="Phone App " 
            className="w-full h-full object-cover" 
          />
        </div>

      </div>
    </section>
  );
};

export default AppDownload;