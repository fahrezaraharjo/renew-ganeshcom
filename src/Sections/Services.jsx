import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { serviceHome } from "../utils/dummyData";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <motion.div
    className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </motion.div>
);

const Services = () => {
  const leftSectionVariants = {
    hidden: { x: -500 },
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
    <div className="flex w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <motion.div
          className="flex-1 flex flex-col justify-start items-start"
          variants={leftSectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h1  className="text-3xl font-bold text-gradient mb-4">
            {serviceHome.topItems.text1}
            <br />
          </h1>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            {serviceHome.topItems.text2}
          </p>
        </motion.div>

        <motion.div
          className="flex-1 flex flex-col justify-start items-center"
          variants={rightSectionVariants}
          initial="hidden"
          animate="visible"
        >
          <ServiceCard
            color="bg-[#2952E3]"
            title="Security gurantee"
            icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
          <ServiceCard
            color="bg-[#8945F8]"
            title="Best exchange rates"
            icon={<BiSearchAlt fontSize={21} className="text-white" />}
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
          <ServiceCard
            color="bg-[#F84550]"
            title="Fastest transactions"
            icon={<RiHeart2Fill fontSize={21} />}
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;