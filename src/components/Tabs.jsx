import React, { useState } from 'react';
import { BsArrowRight, BsShieldFillCheck } from "react-icons/bs";


const tabsData = [
  {
    title: 'Software Development',
    photo: '	https://ganeshcomstudio.com/uploads/images/service-230326.175925.png',
    paragraph: 'We develop responsive web-based applications on various platforms, with interactive design displays, powerful functionality, and dynamic software..',
  },
  {
    title: 'Mobile App',
    photo: '	https://ganeshcomstudio.com/uploads/images/service-230326.175935.png',
    paragraph: 'We design a mobile app system that supports various existing operating systems and is user friendly, where you can interact adaptively with anyone..',
  },
  {
    title: 'IT Masterplan',
    photo: 'https://ganeshcomstudio.com/uploads/images/service-230326.175944.png',
    paragraph: 'We develop an IT development plan that aligns with your business strategy. Realize your company`s digital transformation with the right planning.',
  },
  {
    title: 'Branding Website',
    photo: 'https://ganeshcomstudio.com/uploads/images/service-230326.175955.png',
    paragraph: 'We work with different types of clients. For us, your website is not only your digital presence but also a strong digital brand through a personalized website that visitors will love.',
  },
  {
    title: 'Startup Partnership',
    photo: 'https://ganeshcomstudio.com/uploads/images/service-230326.180003.png',
    paragraph: 'Partners with us. We fine tune each innovation program to enable corporate/startup collaboration and leapfrog competition by innovating faster.',
  },
];

const ServiceCard = ({ color, title, icon, paragraph }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {paragraph}
      </p>
    </div>
  </div>
);

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full flex flex-col p-14 mx-auto gradient-bg-transactions">
      <h3 className="text-3xl font-bold text-gradient mb-4">
        OUR SERVICE
      </h3>
      <div className="flex mb-4">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            className={`${activeTab === index
              ? 'border-blue-500 text-blue-500'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } flex items-center px-4 py-2 border-b-2 font-medium`}
            onClick={() => handleTabClick(index)}
          >
            <span>{tab.title} |</span>
          </button>
        ))}
      </div>
      <div className="flex flex-row items-center w-full justify-evenly">
        <div className='w-1/4 ml-10 h-30'>
          <img src={tabsData[activeTab].photo} alt={tabsData[activeTab].title} className="w-full object-cover " />
        </div>
        {tabsData.map((tab, index) => (
          activeTab === index && (
            <div className='flex flex-start flex-col w-1/4'>
              <ServiceCard
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