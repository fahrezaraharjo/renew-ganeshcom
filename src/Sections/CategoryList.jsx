import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { solutionDatas } from "../utils/dummyData";
import { motion } from 'framer-motion';


const OurSolution = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = ["all", ...Object.keys(solutionDatas)];
  const items =
    activeCategory === "all"
      ? Object.values(solutionDatas).flatMap((category) => category.items)
      : solutionDatas[activeCategory]?.items || [];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the duration between slides
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-14">
      <h2 className="text-3xl font-extrabold text-blue-400 shadow-xl sm:text-4xl mb-8">
        Our Solutions
      </h2>
      <nav className="flex justify-center space-x-8 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`text-lg p-4 font-medium focus:outline-none ${activeCategory === category
              ? "text-blue-500 rounded-sm border-b-2 border-blue-500"
              : "text-green-300 hover:text-blue-500 "
              }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>
      <div className='container mx-auto cursor-pointer'>
        <div className='grid grid-cols-1'>
          <Slider {...settings}>
            {items.map((item, index) => (
              <Link to={`/solutions/${item.id}`}>
                <div key={item.id} className="relative flex" style={{ marginRight: index === items.length - 1 ? 0 : 16 }}>
                  <motion.div
                    className='absolute rounded-xl inset-0 bg-blue-500 bg-opacity-50 text-white p-4 hover:opacity-0 transition-opacity duration-500 ease-in-out items-center flex justify-center'
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className='text-lg text-center font-bold text-gray-100'>{item.name}</h2>
                  </motion.div>
                  <motion.img
                    src={item.img}
                    alt={item.name}
                    className='h-48 w-full object-cover rounded-xl'
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurSolution;