import React, { useState } from "react";
import YouTube from "react-youtube";
import { headerData } from "../../utils/dummyData";
import { Footer, Header, Navbar } from "../../components";
import { motion } from 'framer-motion';

const AboutPage = () => {
    const [isHomePage, setIsHomePage] = useState(false);
    const videoUrl = "https://www.youtube.com/watch?v=QUum-oFEttQ";
    const videoId = videoUrl.match(/(?:v=)([\w-]+)/)[1];
    const options = {
        height: "360",
        width: "640",
        playerVars: {
            autoplay: 1,
        },
    };
    return (
        <div className="min-h-screen overflow-hidden">
            <div className="gradient-bg-welcome">
                <Navbar />
            </div>
            <div className="bg-about-page p14">
            <Header title='About' subtitle='Find the right solution for your needs' />
                <motion.div
                    className="flex w-full justify-center items-center blur-sec mt-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                        <motion.div
                            className="flex-1 flex flex-col justify-start items-start"
                            initial={{ x: "-100vw" }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >
                            <h1 className="text-3xl font-bold text-gradient mb-4">
                                {headerData.about.title}
                            </h1>
                            <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
                                {headerData.about.description}
                            </p>
                        </motion.div>
                        <motion.div
                            className=""
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        >
                            <YouTube videoId={videoId} opts={options} />
                        </motion.div>
                    </div>
                </motion.div>
                <div className="mt-10">
                    <Footer isHomePage={isHomePage} />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;