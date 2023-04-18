import React, { useContext } from "react";
import { BsInfoCircle, BsArrowRight } from "react-icons/bs";

import Carousel from "./Carousel";

const Welcome = () => {

  return (
    <div className="flex w-full justify-center items-center min-h-screen">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-12 py-4 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h2 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Partner of <br />
            DIGITAL TRANSFORMATION
          </h2>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            A digital transformation partner helps firms quickly identify places and functions within an enterprise that would benefit from digital technology
          </p>

          <button
            type="button"
            onClick={() => { }}
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >

            <p className="text-white text-base font-semibold">
              Explore Now
            </p>
            <BsArrowRight className="text-white ml-3" />
          </button>

          <Carousel
            images={[
              'https://ganeshcomstudio.com/uploads/images/homeslider-230326.171937.jpg',
              'https://ganeshcomstudio.com/uploads/images/homeslider-230326.171926.jpg',
              'https://ganeshcomstudio.com/uploads/images/homeslider-230326.171913.jpg',
            ]}
          />
        </div>
      </div>
    </div>

  );
};

export default Welcome;
