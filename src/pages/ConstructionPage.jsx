import React from "react";
import { ArrowUpRight } from "lucide-react";

import cons_img1 from "../assets/cons_img1.png";
import cons_img2 from "../assets/cons_img2.png";
import cons_img3 from "../assets/cons_img3.png";

const CategoryCard = ({ title, image }) => {
  return (
    <div
      className="bg-white shadow-md hover:shadow-xl transition-all"
      style={{
        width: "100%",
        maxWidth: "482px",
        height: "auto",
        borderRadius: "27px",
      }}
    >
      {/* Text Content */}
      <div className="px-6 sm:px-8 pt-8 text-center mb-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#01004C] mb-3">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Lorem Ipsum available, but the majority have suffered alteration in
          some form
        </p>
      </div>

      {/* Image Section */}
      <div className="relative mt-2">
        <div
          className="relative overflow-hidden"
          style={{ borderRadius: "27px" }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-[260px] sm:h-[300px] md:h-[350px] lg:h-[390px] object-cover"
          />

          {/* White Square */}
          <div
            className="absolute -bottom-1 -right-1 bg-white flex items-center justify-center cursor-pointer group shadow-md transition-all duration-300 hover:shadow-lg"
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "20px",
            }}
          >
            {/* Arrow Circle */}
            <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px] rounded-full bg-[#01004C] flex items-center justify-center transition-all group-hover:scale-105">
              <ArrowUpRight size={28} className="text-white" />
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
    <div className="bg-white min-h-screen py-16 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
            It is a long established fact that a reader <br className="hidden sm:block" />
            will be distracted by the
          </h1>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center border rounded-lg overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Search for more results..."
              className="flex-1 px-6 py-4 outline-none text-gray-600"
            />
            <button className="bg-[#01004C] text-white px-10 py-4 w-full sm:w-auto">
              Search
            </button>
          </div>
        </div>

        {/* Cards Layout */}
        <div
  className="
    grid 
    gap-12 
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
        <div className="flex justify-center mt-12">
          <button
            className="flex items-center justify-between bg-[#01004C] text-white hover:bg-[#440001] transition-all duration-300"
            style={{
              width: "clamp(240px, 70%, 280px)",
              height: "64px",
              borderRadius: "8px",
              padding: "0 20px",
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "18px",
            }}
          >
            More Categories
            <span className="w-10 h-10 bg-white text-[#01004C] rounded-full flex items-center justify-center">
              →
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default ConstructionPage;
