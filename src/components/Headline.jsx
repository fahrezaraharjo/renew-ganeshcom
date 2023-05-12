import { useState } from 'react';
import { motion } from 'framer-motion';

const Headline = ({ title, subtitle }) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className='bg-headline'>
            <motion.div
                initial={{ opacity: 1, x: "-100vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}

                className="h-[300px] w-full">
                <div className="relative w-full h-[300px] blur-sec">
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className=" shadow-md backdrop-blur-sm border-2 border-black text-white bg-opacity-40 py-2 px-4"
                        >
                            <h1 className="text-4xl w-full justify-center flex items-center text-gray-100 font-bold">{title}</h1>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Headline;