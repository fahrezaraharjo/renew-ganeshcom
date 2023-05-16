import { solutionDatas } from "../utils/dummyData";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const OurSolution = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = ["All", ...Object.keys(solutionDatas)];
  const [currentIndex, setCurrentIndex] = useState(0);
  const items =
    activeCategory === "All"
      ? Object.values(solutionDatas).flatMap((category) => category.items)
      : solutionDatas[activeCategory]?.items || [];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
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
            className={`button-85 ${activeCategory === category
              ? "text-blue-500 rounded-sm border-b-2 border-blue-500"
              : "text-green-300 hover:text-blue-500"
              }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>
      <div className="relative white-glassmorphism p-5 flex flex-wrap">
        <div className="flex justify-start items-center pb-4 overflow-hidden scrollbar-hide">
          <AnimatePresence initial={false} custom={currentIndex}>
            <motion.div
              className="flex space-x-4"
              drag="x"
              dragConstraints={{ left: 0, right: (items.length - 1) * -480 }}
              dragElastic={0.8}
              key={currentIndex}
              custom={currentIndex}
              style={{
                transform: `translateX(${currentIndex * -480}px)`,
              }}
              transition={{ ease: "easeOut", duration: 0.3 }}
            >
              {items.map((item, index) => (
                <Link
                  to={`/solutions/${item.id}`}
                  className="text-purple-800 font-bold mt-2 hover:text-blue-700"
                  key={item.id}
                >
                  <motion.div
                    className="w-80 rounded-lg shadow-md flex-shrink-0 mr-4 relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-44 object-cover rounded-xl"
                    />
                    <motion.div
                      className="hover:cursor-pointer text-lg font-medium absolute text-green-300 rounded-xl w-full h-full bg-blue-400 bg-opacity-50 mb-2 inset-0 flex justify-center text-center items-center"
                      initial={{ opacity: 1 }}
                      whileHover={{ opacity: 0, transition: { duration: 0.2 } }}
                      exit={{ opacity: 1 }}
                    >
                      <h3 className="text-white">{item.name}</h3>
                    </motion.div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center w-full mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div >
  );
};

export default OurSolution;