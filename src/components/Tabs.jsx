import React, { useState } from 'react';
import { BsArrowRight, BsShieldFillCheck } from "react-icons/bs";
import { tabsData } from '../utils/dummyData';
import ServicesCard from './ServicesCard';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full flex flex-col p-4 md:p-14 mx-auto gradient-bg-transactions">
      <h3 className="text-3xl font-bold text-green-300 mb-4">
        OUR SERVICE
      </h3>
      <div className="flex mb-4 overflow-x-auto">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            className={`${activeTab === index
              ? 'border-blue-500 text-green-300'
              : 'border-transparent text-blue-500 hover:text-gray-700 hover:border-gray-300'
              } flex items-center px-4 py-2 border-b-2 font-medium whitespace-nowrap`}
            onClick={() => handleTabClick(index)}
          >
            <span>{tab.title} |</span>
          </button>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center w-full justify-evenly">
        <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 ml-10 h-[300px] justify-center flex items-center'>
          <img src={tabsData[activeTab].photo} alt={tabsData[activeTab].title} className="w-full object-cover md:h-70 lg:mt-3" />
        </div>
        {tabsData.map((tab, index) => (
          activeTab === index && (
            <div key={index} className='flex flex-start flex-col w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mt-4 md:mt-0'>
              <ServicesCard
                color="bg-[#2952E3]"
                title={tab.title}
                icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
                paragraph={tab.paragraph}
              />
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Tabs;