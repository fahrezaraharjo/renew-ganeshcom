import React, { useState } from "react";
import YouTube from "react-youtube";
import { headerData } from "../../utils/dummyData";
import { Footer, Navbar } from "../../components";

const AboutPage = () => {
    const [isHomePage, setIsHomePage] = useState(false);
    const videoUrl = "https://www.youtube.com/watch?v=QUum-oFEttQ";
    const videoId = videoUrl.match(/(?:v=)([\w-]+)/)[1];
    const opts = {
        playerVars: {
            autoplay: 1,
        },
    };
    return (
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
                <Navbar />
            </div>
            <div className="bg-about-page p14">
                <div className="relative w-full h-[300px] ">
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
                        <div className="bg-black text-white bg-opacity-40 py-2 px-4 rounded-md ml-10 p-4">
                            <h1 className="text-lg font-bold">{headerData.about.name}</h1>
                        </div>
                        <div className="bg-black bg-opacity-40 py-2 px-4 rounded-md mr-10 w-[300px] items-start flex justify-center flex-row gap-1">
                            <h1 className="text-lg font-bold items-center text-blue-500 text-center">Home| </h1>
                            <h2 className="text-white items-center text-center text-lg font-bold">{headerData.about.title}</h2>
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center items-center white-glassmorphism">
                    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                        <div className="flex-1 flex flex-col justify-start items-start">
                            <h1 className="text-3xl font-bold text-gradient mb-4">{headerData.about.title}</h1>
                            <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
                                {headerData.about.description}
                            </p>
                        </div>
                        <div className="">
                            <YouTube
                                videoId={videoId}
                                className="object-cover rounded-lg shadow-md"
                                opts={opts}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                <Footer isHomePage={isHomePage} />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;