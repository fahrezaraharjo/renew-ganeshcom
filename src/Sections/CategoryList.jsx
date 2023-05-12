import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { categories, settings } from "../utils/dummyData";

const CategoryList = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="w-full flex flex-col p-6 md:p-14 mx-auto backdrop-blur-sm">
      <h1 className="text-2xl md:text-3xl font-bold text-green-300 mb-4">
        OUR SOLUTION
      </h1>
      <h1 className="text-blue-500 mb-2 ml-6">All Categories</h1>
      <div className="flex flex-col md:flex-row justify-between gap-5 w-full">
        <div className="w-full md:w-1/3 white-glassmorphism rounded-lg shadow-md p-4 justify-center flex items-center text-center">
          <ul className="w-full h-full">
            {categories.map((category) => (
              <li
                key={category.id}
                className={`my-2 p-2 rounded-full mt-2 cursor-pointer text-white hover:text-black hover:bg-blue-200 transition duration-300 ease-in-out ${activeCategory.id === category.id ? "text-blue-500" : ""
                  }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-2/3 white-glassmorphism rounded-lg shadow-md">
          <h2 className="text-lg md:text-xl font-semibold py-4 px-8 text-blue-500 border-b-2 border-blue-200">
            {activeCategory.name}
          </h2>
          <div className="md:p-2">
            <Slider {...settings}>
              {activeCategory.photos.map((photo) => (
                <motion.div
                  key={photo.id}
                  className="rounded-xl p-2 hover:bg-blue-200 transition duration-300 ease-in-out"
                  style={{ height: "500px" }}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="relative group cursor-pointer"
                    style={{ height: "100%", width: "100%" }}
                    whileHover={{ opacity: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute rounded-xl inset-0 bg-blue-500 hover:rounded-xl bg-opacity-50 text-white p-4 transition-opacity duration-500 ease-in-out items-center flex justify-center"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      whileHover={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ height: "100%", width: "100%" }}
                    >
                      <h2 className="text-lg text-center font-bold text-gray-100">
                        {photo.title}
                      </h2>
                    </motion.div>
                    <motion.img
                      src={photo.url}
                      alt={photo.title}
                      className='w-full h-full object-cover rounded-xl'
                    />
                  </motion.div>
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;

