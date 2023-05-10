import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
    const formVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="bg-contact-page">
            <motion.div
                className="flex justify-center items-center h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="max-w-md w-full mx-auto"
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <form className="white-glassmorphism shadow-lg rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                placeholder="Enter your message"
                                rows={5}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ContactPage;