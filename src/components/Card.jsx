import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Card = ({ imageUrl, name, description, id }) => {
  return (
    <div className='relative'>
      <motion.div
        className='absolute inset-0 bg-black bg-opacity-50 text-white p-4 hover:opacity-0 transition-opacity duration-500 ease-in-out'
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        whileHover={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='text-lg font-bold'>{name}</h2>
        <p className='text-gray-500'>{description}</p>
        <Link to={`/solutions/${id}`} className='text-blue-500 font-bold mt-2 hover:text-blue-700'>
          Learn More
        </Link>
      </motion.div>
      <motion.img
        src={imageUrl}
        alt={name}
        className='h-48 w-full object-cover rounded-md'
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};

export default Card;