// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const categories = [
//   { name: 'Education', color: 'bg-blue-500', image:"" },
//   { name: 'Oil & Gas Company', color: 'bg-green-500' },
//   { name: 'Industry', color: 'bg-yellow-500' },
//   { name: 'Store & Supply', color: 'bg-red-500' },
//   { name: 'Property & Contractor', color: 'bg-purple-500' },
//   { name: 'E-Government', color: 'bg-indigo-500' },
// ];

// const CategoryList = () => {
//   const [activeCategory, setActiveCategory] = useState(categories[0]);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
  
//   const ImageCarousel = () => {
//     return (
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index}>
//             <img src={image} alt={`Image ${index + 1}`} />
//           </div>
//         ))}
//       </Slider>
//     );
//   };

//   const handleClick = (category) => {
//     setActiveCategory(category);
//   };

//   return (
//     <div className="w-full flex flex-row p-14 mx-auto gradient-bg-transactions">
//       <div className="w-1/3 p-4">
//         <h2 className="text-2xl font-bold mb-4 text-gradient">All Categories</h2>
//         <ul>
//           {categories.map((category) => (
//             <li
//               key={category.name}
//               className={`py-2 px-4 rounded-lg cursor-pointer text-gradient ${
//                 category.name === activeCategory.name ? category.color + ' text-black' : ''
//               }`}
//               onClick={() => handleClick(category)}
//             >
//               {category.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="w-2/3 p-4">
//         <ImageCarousel />
//       </div>
//     </div>
//   );
// };

// export default CategoryList;