import { useState } from 'react';
import { motion } from 'framer-motion';

const Header = ({ title, subtitle }) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div
            className="h-[300px] w-full">
            <div className="relative w-full h-[300px] rounded-mdss">
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className=" text-white bg-opacity-40 py-2 px-4 rounded-full w-[220px] h-[220px] justify-center flex items-center text-center backdrop-blur-xl bg-white ml-40"
                    >
                        <h1 className="text-lg text-green-300 font-bold">{subtitle}</h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-white bg-opacity-30 py-2 px-4 rounded-full w-[220px] h-[220px] justify-center flex items-center text-center backdrop-blur-xl bg-white mr-40"
                    >
                        <h1 className="text-lg font-bold items-center text-blue-500 text-center">
                            Home|{" "}
                        </h1>
                        <h2 className="text-white items-center text-center text-lg font-bold">
                            {title}
                        </h2>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Header;