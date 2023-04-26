import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const trustedCompanies = [
  { image: '../../../images/trustedby-230317.193521.png' },
  { image: '../../../images/trustedby-230317.200105.png' },
  { image: '../../../images/trustedby-230317.200608.png' },
  { image: '../../../images/trustedby-230317.200759.png' },
  { image: '../../../images/trustedby-230317.200825.png' },
  { image: '../../../images/trustedby-230317.200759.png' },
  { image: '../../../images/trustedby-230317.200914.png' },
  { image: '../../../images/trustedby-230317.201026.png' },
  { image: '../../../images/trustedby-230317.201046.png' },
  { image: '../../../images/trustedby-230317.201106.png ' },


];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TrustedBySection = () => {
  return (
    <div className="gradient-bg-trustedby w-full flex flex-col p-14 mx-auto">
      <h2 className="text-3xl font-bold text-gradient mb-4">Trusted by</h2>
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