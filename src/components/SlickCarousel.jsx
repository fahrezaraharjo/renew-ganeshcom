import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import trustedBy1 from '../../images/trustedby-230317.193521.png';
import trustedBy2 from '../../images/trustedby-230317.200608.png';
import trustedBy3 from '../../images/trustedby-230317.200759.png';
import trustedBy4 from '../../images/trustedby-230317.200105.png';
import trustedBy5 from '../../images/trustedby-230317.200825.png';
import trustedBy6 from '../../images/trustedby-230317.200849.png';

const slides = [
    {
        id: 1,
        image: trustedBy1,
        alt: 'Slide 1'
    },
    {
        id: 2,
        image: trustedBy2,
        alt: 'Slide 2'
    },
    {
        id: 3,
        image: trustedBy3,
        alt: 'Slide 3'
    },
    {
        id: 4,
        image: trustedBy4,
        alt: 'Slide 4'
    },
    {
        id: 5,
        image: trustedBy5,
        alt: 'Slide 5'
    },
    {
        id: 6,
        image: trustedBy6,
        alt: 'Slide 6'
    }
];

const SlickCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        draggable: true, // add this option
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="bg-gradient-to-br py-8">
            <div className="container mx-auto">
                <Slider {...settings}>
                    {slides.map((slide) => (
                        <div className="p-4 flex justify-center" key={slide.id}>
                            <div className="bg-black-300 rounded-lg overflow-hidden shadow-lg flex justify-center items-center" style={{ height: '300px', width: '100%' }}>
                                <img src={slide.image} alt={slide.alt} style={{ width: '100%', height: '50%', }} />

                            </div>
                        </div>
                    ))}
                </Slider>
                <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">We are an Information Technology Company that provides IT services and solutions for website design, web application development, mobile application development, and various innovative product developments. We realize the progression into the digital age has been inevitable, for businesses to survive and thrive in this era, an understanding of these innovations is key. With a mission to enhance our customers' business growth, we provide IT services and solutions with creative design and development, as well as provide high-quality solutions.
                </p>
            </div>
        </div>
    );
};

export default SlickCarousel;