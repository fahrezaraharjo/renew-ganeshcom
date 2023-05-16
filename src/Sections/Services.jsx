import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { serviceHome } from "../utils/dummyData";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <motion.div
    className="flex flex-row justify-start items-start shadowcard white-glassmorphism shadow-md p-3 m-2 cursor-pointer hover:shadow-xl"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    whileInView={{ x: [50, 150, 100], opacity: [0, 0, 1] }}
  >
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg sm:text-xl md:text-2xl">{title}</h3>
      <p className="mt-1 text-white text-sm md:text-base lg:text-lg xl:text-xl">
        {subtitle}
      </p>
    </div>
  </motion.div>
);

const Services = () => {
  const leftSectionVariants = {
    hidden: { x: -500 },
    initial: { x: 0 },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 2,
      },
    },
  };

  const rightSectionVariants = {
    hidden: { x: 500 },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 2,
      },
    },
  };

  return (
    <div className="flex w-full justify-between gradient-bg-services overflow-hidden ">
      <div className="w-1/2 flex  mf:flex-row flex-col p-12">
        <motion.div
          className="flex-1 flex flex-col w-full h-full object-cover justify-start items-start"
          variants={leftSectionVariants}
          initial="hidden"
          animate="visible">
          <h1 className="text-3xl font-bold text-gradient mb-4">
            {serviceHome.topItems.text1}
            <br />
          </h1>
          <p className="text-left p-2 my-2 text-white font-light md:w-9/12 w-11/12 text-base sm:text-lg md:text-xl">
            {serviceHome.topItems.text2}
          </p>
        </motion.div>
      </div>
      <div className="w-1/2 flex justify-start">
        <motion.div
          className="flex-1 flex flex-col w-full h-full object-cover justify-start items-start"
          variants={rightSectionVariants}
          initial="hidden"
          animate="visible"
        >
          <ServiceCard
            color="bg-[#2952E3]"
            title="Security guarantee"
            icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
            subtitle="Security is guaranteed. We always maintain privacy and the quality of our products."
          />
          <ServiceCard
            color="bg-[#8945F8]"
            title="Best exchange rates"
            icon={<BiSearchAlt fontSize={21} className="text-white" />}
            subtitle="Get the best exchange rates. We provide competitive rates for all transactions."

          />
          <ServiceCard
            color="bg-[#F84550]"
            title="Fastest transactions"
            icon={<RiHeart2Fill fontSize={21} />}
            subtitle="Experience fast and seamless transactions. We prioritize efficiency."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;