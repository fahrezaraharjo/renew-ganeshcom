import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { categories } from "../utils/dummyData";

const CategoryList = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Menambahkan custom style untuk efek hover pada list kategori
  const categoryItemStyle =
    "my-2 cursor-pointer text-white hover:text-black hover:bg-gray-100 transition duration-300 ease-in-out";

  // Menambahkan custom style untuk efek hover pada slide foto
  const slideItemStyle =
    "px-4 py-4 md:p-4 hover:bg-gray-100 transition duration-300 ease-in-out";

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    

  return (
    <div className="flex flex-row justify-between w-full px-14">
      <div className="w-1/3 white-glassmorphism p-4 mx-5">
        <h1 className="text-gradient border-b-2 ">All Categories</h1>
        <ul className="">
          {categories.map((category) => (
            <li
            key={category.id}
            className={`${categoryItemStyle} ${
              activeCategory.id === category.id ? "text-blue-500" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3 white-glassmorphism">
        <h2 className="text-lg font-semibold py-4 px-8 text-gradient border-b-2 border-blue-200">
          {activeCategory.name} 
        </h2>
        <div className="p-8">
        <Slider {...settings}>
          {activeCategory.photos.map((photo) => (
            <div
              key={photo.id}
              data-title={photo.title}
              className="relative hover:opacity-75 transition-opacity duration-200 px-4"
            >
              <img src={photo.url} alt={photo.title} className="object-contain rounded-md"/>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;