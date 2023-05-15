import { solutionDatas } from "../utils/dummyData";
import { useState } from "react";
import { motion } from "framer-motion";

const OurSolution = () => {
  const [activeCategory, setActiveCategory] = useState("education");
  const categories = Object.keys(solutionDatas);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-14">
      <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl mb-8">
        Our Solutions
      </h2>
      <nav className="flex justify-center space-x-8 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`text-lg font-medium focus:outline-none ${
              activeCategory === category
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-300 hover:text-gray-100"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>
      <div className="relative">
        <div className="flex justify-start items-center space-x-4 overflow-x-hidden pb-4">
          {solutionDatas[activeCategory].items.map((item) => (
            <div
              key={item.id}
              className="w-80 bg-white rounded-lg shadow-md flex-shrink-0 mr-4 relative"
            >
              <img src={item.img} alt={item.name} className="w-full h-44 object-cover rounded-xl" />
              <motion.div
                className="text-lg font-medium absolute text-green-300 rounded-xl bg-blue-400 bg-opacity-50 mb-2 inset-0 flex justify-center text-center items-center"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0, transition: { duration: 0.3 } }}
              >
                {item.name}
              </motion.div>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button className="bg-white p-2 rounded-full shadow-md hover:shadow-lg focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-right w-6 h-6"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurSolution;