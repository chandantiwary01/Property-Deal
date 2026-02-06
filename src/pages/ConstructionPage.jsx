import React from "react";
import { ArrowUpRight } from "lucide-react";

import cons_img1 from "../assets/cons_img1.png";
import cons_img2 from "../assets/cons_img2.png";
import cons_img3 from "../assets/cons_img3.png";

const CategoryCard = ({ title, image }) => {
  return (
    <div
      className="bg-white shadow-md hover:shadow-xl transition-all mx-auto w-full flex flex-col"
      style={{
        width: "100%",
        maxWidth: "482px",
        height: "auto",
        borderRadius: "27px",
      }}
    >
      {/* Text Content */}
      <div className="px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 text-center mb-6">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#01004C] mb-3">
          {title}
        </h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed line-clamp-2 sm:line-clamp-none font-poppins ">
          Lorem Ipsum available, but the majority have suffered alteration in
          some form
        </p>
      </div>

      {/* Image Section */}
      <div className="relative mt-auto">
        <div
          className="relative overflow-hidden"
          style={{ borderRadius: "27px" }}
        >
          <img
            src={image}
            alt={title}
            className="
              w-full 
              object-cover
              h-[200px]
              xs:h-[220px]
              sm:h-[260px]
              md:h-[300px]
              lg:h-[350px]
              xl:h-[390px]
            "
          />

          {/* White Square */}
          <div
            className="
              absolute 
              -bottom-1 
              -right-1 
              bg-white 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              group 
              shadow-md 
              transition-all 
              duration-300 
              hover:shadow-lg
              z-10
            "
            style={{
              width: "clamp(60px, 18vw, 90px)",
              height: "clamp(60px, 18vw, 90px)",
              borderRadius: "20px 0px 20px 0px", // Adjusted for better bottom-right fit
            }}
          >
            {/* Arrow Circle */}
            <div className="
              rounded-full 
              bg-[#01004C] 
              flex 
              items-center 
              justify-center 
              transition-all 
              group-hover:scale-110
              w-[40px]
              h-[40px]
              sm:w-[60px]
              sm:h-[60px]
              lg:w-[70px]
              lg:h-[70px]
              xl:w-[80px]
              xl:h-[80px]
            ">
              <ArrowUpRight className="text-white w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConstructionPage = () => {
  const categories = [
    { title: "Cement", image: cons_img1 },
    { title: "Brick", image: cons_img2 },
    { title: "Steel", image: cons_img3 },
    { title: "Cement", image: cons_img1 },
    { title: "Brick", image: cons_img2 },
    { title: "Steel", image: cons_img3 },
    { title: "Cement", image: cons_img1 },
    { title: "Brick", image: cons_img2 },
    { title: "Steel", image: cons_img3 },
  ];

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16 md:py-20 px-4 sm:px-6 font-poppins ">
      <div className="max-w-[1440px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16 md:mb-20 px-2">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-8">
            It is a long established fact that a reader
            <br className="hidden md:block" />
            will be distracted by the
          </h1>

          {/* Search Bar - Optimized for Mobile Rounding */}
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-stretch border-2 border-gray-100 rounded-xl sm:rounded-lg overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Search for more results..."
              className="flex-1 px-4 sm:px-6 py-4 sm:py-5 outline-none text-gray-600 text-sm sm:text-base"
            />
            <button className="bg-[#01004C] text-white px-8 sm:px-12 py-4 sm:py-5 w-full sm:w-auto font-bold transition-colors hover:bg-[#0a0963]">
              Search
            </button>
          </div>
        </div>

        {/* Cards Layout - Better grid gap management */}
        <div
          className="
            grid 
            gap-6
            sm:gap-8
            lg:gap-10 
            xl:gap-12
            justify-center
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {categories.map((item, index) => (
            <CategoryCard key={index} {...item} />
          ))}
        </div>

        {/* More Categories Button */}
        <div className="flex justify-center mt-12 sm:mt-20">
          <button
            className="flex items-center justify-between bg-[#01004C] text-white hover:bg-[#440001] transition-all duration-300 group shadow-lg active:scale-95"
            style={{
              width: "clamp(240px, 90%, 320px)",
              height: "64px",
              borderRadius: "8px",
              padding: "0 20px",
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "18px",
            }}
          >
            More Categories
            <span className="w-10 h-10 bg-white text-[#01004C] rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default ConstructionPage;