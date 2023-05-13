import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Carousel from "../components/Carousel";
import { welcomeDatas } from "../utils/dummyData";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <div className="p-4">
      <motion.div
        initial={{ opacity: 0 }}
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}

        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}>
        <div className="w-full mx-auto flex flex-row md:flex-row justify-center items-center py-16 md:py-32 px-6 md:px-0">
          <div className="white-glassmorphism shadow-lg rounded-lg flex flex-col md:flex-row w-full p-4">
            <div className="w-full md:w-1/2 h-full">
              <div className="h-full">
                <Carousel images={welcomeDatas.rightItems} />
              </div>
            </div>
            <div className="p-8 flex flex-col justify-between md:w-1/2">
              <h1 className="text-2xl md:text-2xl font-bold text-gray-400 mb-6">
                {welcomeDatas.leftItems.text1}
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
                {welcomeDatas.leftItems.text2}
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-8">
                {welcomeDatas.leftItems.text3}
              </p>
              <button
                type="button"
                onClick={() => { }}
                className="inline-flex w-[250px] items-end px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Explore Now
                <BsArrowRight className="ml-3 mr-1 mb-1 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Welcome;