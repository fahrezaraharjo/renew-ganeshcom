import React from 'react';
import Slider from 'react-slick';
import { products, settings } from '../utils/dummyData';

const FeaturedProduct = () => {
  return (
    <div className='container mx-auto py-8 backdrop-blur-sm gradient-bg-welcome'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold text-green-300'>FEATURED PRODUCT</h2>
      </div>
      <div className='mt-8'>
        <p className='text-center text-blue-300'>
          Do not worry about the development of technology, let us help with the application that we have developed.
        </p>
      </div>
      <div className='mt-8'>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className='p-4'>
              <div className='white-glassmorphism shadow-lg rounded-lg overflow-hidden'>
                <img className='w-full' src={product.images[0]} alt={product.title} />
                <div className='px-6 py-4'>
                  <h3 className='text-lg font-bold text-green-500 mb-2'>{product.title}</h3>
                  <p className='text-blue-300 text-sm'>{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedProduct;