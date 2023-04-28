import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { trustedCompanies } from '../utils/dummyData';
import { settings } from '../utils/dummyData';

const TrustedBySection = () => {
  return (
    <div className="gradient-bg-trustedby w-full flex flex-col p-14 mx-auto">
      <h2 className="text-3xl font-bold text-gradient mb-4">TRUSTED BY</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Slider {...settings}>
          {trustedCompanies.map((company) => (
            <div key={company.name} className="px-4">
              <img src={company.image} alt={company.name} className="h-20 mx-auto" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrustedBySection;