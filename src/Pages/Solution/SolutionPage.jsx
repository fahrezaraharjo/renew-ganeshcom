import React, { useState } from 'react';
import { headerData } from '../../utils/dummyData';
import { solutionDatas } from '../../utils/dummyData';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CategoryMenu, Footer, Header, Navbar } from '../../components';

const SolutionPage = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [isHomePage, setIsHomePage] = useState(false);

    // Define the list of solutions based on the selected filter
    const solutionItems =
        selectedFilter === 'all'
            ? Object.values(solutionDatas).flatMap((data) => data.items)
            : solutionDatas[selectedFilter].items;

    return (
        <div className='gradient-bg-oursolutions min-h-screen pt-24'>
            <Header title='Solutions' subtitle='Find the right solution for your needs' />
            <div className='flex flex-col gap-[35px]'>
                <div className='flex flex-col p-14 gap-3 white-glassmorphism'>
                    <h1 className='text-3xl text-gray-100'>
                        Our Solutions
                    </h1>
                    <p className='text-gray-500'>
                        All Category of our development based on Segmented Solution
                    </p>
                </div>
                <div className='flex flex-row justify-between gap-9 p-14 h-full white-glassmorphism'>
                    <div className='flex w-1/3 flex-col flex-2 white-glassmorphism h-[350px] justify-center items-center text-center p-2'>
                        <CategoryMenu selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
                    </div>
                    <div className='container mx-auto cursor-pointer'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            {solutionItems.map((item, index) => (
                                <Link to={`/solutions/${item.id}`} className='text-purple-800 font-bold mt-2 hover:text-blue-700'>
                                    <div className='relative' key={index}>
                                        <motion.div
                                            className='absolute rounded-xl inset-0 bg-blue-500 bg-opacity-50 text-white p-4 hover:opacity-0 transition-opacity duration-500 ease-in-out items-center flex justify-center'
                                            initial={{ opacity: 1 }}
                                            animate={{ opacity: 1 }}
                                            whileHover={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <h2 className='text-lg text-center font-bold text-gray-100'>{item.name}</h2>
                                        </motion.div>
                                        <motion.img
                                            src={item.img}
                                            alt={item.name}
                                            className='h-48 w-full object-cover rounded-xl'
                                            initial={{ opacity: 1 }}
                                            animate={{ opacity: 1 }}
                                            whileHover={{ opacity: 0.1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default SolutionPage;