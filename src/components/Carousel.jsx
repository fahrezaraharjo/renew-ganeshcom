/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable arrow-body-style */
import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  const renderDots = () => {
    return images.map((image, index) => (
      <button
        key={image.id}
        className={`w-3 h-3 rounded-full mr-2 ${
          index === currentImageIndex ? "bg-black" : "bg-gray-300"
        }`}
        onClick={() => handleDotClick(index)}
      />
    ));
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div className="absolute top-0 left-0 w-full">
        <div className="transition-all duration-500 ease-in-out">
          <img
            src={images[currentImageIndex].src}
            alt="carousel"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center">
        {renderDots()}
      </div>
    </div>
  );
};

export default Carousel;
