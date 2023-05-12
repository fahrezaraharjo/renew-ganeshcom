import React from 'react'
import { motion } from "framer-motion";

const ServicesCard = ({ color, title, icon, paragraph }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
            <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
                {icon}
            </div>
            <div className="ml-5 flex flex-col flex-1">
                <h3 className="mt-2 text-white text-lg">{title}</h3>
                <p className="mt-1 text-white text-sm md:w-9/12">
                    {paragraph}
                </p>
            </div>
        </motion.div>)
}

export default ServicesCard