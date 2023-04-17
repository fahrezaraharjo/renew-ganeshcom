import React, { useState } from 'react';

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




const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full flex flex-col p-14 mx-auto gradient-bg-transactions">
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
      <div className="flex flex-row items-center py-4">
        <img src={tabsData[activeTab].photo} alt={tabsData[activeTab].title} className="w-32 h-32 mr-4" />
        <div>
          <h2 className="text-white text-3xl sm:text-5xl py-2 text-gradient mb-2">{tabsData[activeTab].title}</h2>
          <p className="text-gray-600">{tabsData[activeTab].paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;