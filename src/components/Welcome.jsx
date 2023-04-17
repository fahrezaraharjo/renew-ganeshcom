import React, { useContext } from "react";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle, BsArrowRight } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";
import Carousel from "./Carousel";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const tabs = [
  {
    label: 'Software development',
    content: <p>Content for software development tab.</p>
  },
  {
    label: 'Mobile app',
    content: <p>Content for mobile app tab.</p>
  },
  {
    label: 'IT Masterplan',
    content: <p>Content for IT Masterplan tab.</p>
  },
  {
    label: 'Branding website',
    content: <p>Content for branding website tab.</p>
  },
  {
    label: 'Startup',
    content: <p>Content for startup tab.</p>
  }
];

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

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
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >

              <p className="text-white text-base font-semibold">
                Explore Now
              </p>
              <BsArrowRight className="text-white ml-3" />
            </button>
          )}
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
