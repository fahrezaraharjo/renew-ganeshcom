import React, { useState } from 'react';

const CarouselCard = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? cards.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === cards.length - 1 ? 0 : activeIndex + 1);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden mx-auto">
      <div className="absolute top-0 left-0 w-full h-full">
        {cards.map((card, index) => (
          <img
            key={index}
            src={card.image}
            alt={card.title}
            className={`w-full h-3/6 object-contain rounded-md transition-transform duration-500 ease-in-out transform ${
              index === activeIndex ? '' : 'opacity-0 pointer-events-none'
            }`}
            style={{ transform: `translateX(${-100 * activeIndex}%)` }}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4 mt-5">
        <h3 className="text-xl font-bold text-white mb-2">{cards[activeIndex].title}</h3>
        <p className="text-white mb-4">{cards[activeIndex].description}</p>
        <button className="bg-white text-black py-2 px-4 rounded-md">View Details</button>
      </div>
      <div className="absolute bottom-8 left-0 w-full flex justify-center mt-4">
        <Dots activeIndex={activeIndex} cards={cards} onClick={handleDotClick} />
      </div>
      <div className="absolute bottom-8 left-0 w-full flex justify-center mt-4">
        <button className="bg-gray-300 w-6 h-6 mr-2 rounded-full focus:outline-none" onClick={handlePrevClick}>
          <svg className="text-white w-3 h-3 fill-current" viewBox="0 0 1000 1000">
            <path d="M661 149L341 499.5 661 851" />
          </svg>
        </button>
        <button className="bg-gray-300 w-6 h-6 ml-2 rounded-full focus:outline-none" onClick={handleNextClick}>
          <svg className="text-white w-3 h-3 fill-current" viewBox="0 0 1000 1000">
            <path d="M339 149L659 499.5 339 851" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Dots = ({ activeIndex, cards, onClick }) => {
  return (
    <>
      {cards.map((card, index) => (
        <button
          key={index}
          className={`bg-gray-300 w-2.5 h-2.5 rounded-full focus:outline-none mx-2 ${
            index === activeIndex ? 'bg-white' : ''
          }`}
          onClick={() => onClick(index)}
        />
      ))}
    </>
  );
};

export default CarouselCard;