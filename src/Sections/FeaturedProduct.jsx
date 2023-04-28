import React from 'react';
import CarouselCard from '../components/CarouselCard';
import { products } from '../utils/dummyData';

const FeaturedProduct = () => {
  
  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center">Featured Products</h2>
      <p className="text-gray-500 mb-8 text-center">desc.</p>
      <div className="flex flex-wrap justify-center">
        {products.map((product, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-2">
            <CarouselCard
              cards={product.images.map((image, index) => ({
                image: image,
                title: product.title,
                description: product.description
              }))}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;