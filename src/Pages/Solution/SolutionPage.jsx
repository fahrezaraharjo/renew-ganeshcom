import React, { useState } from 'react';
import { headerData } from '../../utils/dummyData';
import { solutionDatas } from '../../utils/dummyData';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CategoryMenu, Footer, Header, Navbar } from '../../components';
import { categoriesSolutions } from '../../utils/dummyData';

const SolutionPage = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [isHomePage, setIsHomePage] = useState(false);

    // Define the list of solutions based on the selected filter
    const solutionItems =
        selectedFilter === 'all'
            ? Object.values(solutionDatas).flatMap((data) => data.items)
            : solutionDatas[selectedFilter].items;

    return (
        <div className='bg-solutions min-h-screen'>
            <Navbar />
            <Header title='Solutions' subtitle='Find the right solution for your needs' />
            <div className='flex flex-row justify-between gap-9 p-14 h-full '>
                <div className='flex mt-10 w-1/3 flex-col flex-2 white-glassmorphism h-[350px] p-2'>
                    <CategoryMenu selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
                </div>
                <div className='container mx-auto mt-10 cursor-pointer'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {solutionItems.map((item, index) => (
                            <div className='relative' key={index}>
                                <motion.div
                                    className='absolute inset-0 bg-black bg-opacity-50 text-white p-4 hover:opacity-0 transition-opacity duration-500 ease-in-out'
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 1 }}
                                    whileHover={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h2 className='text-lg font-bold'>{item.name}</h2>
                                    <p className='text-gray-500'>{item.desc}</p>
                                    <Link to={`/solutions/${item.id}`} className='text-blue-500 font-bold mt-2 hover:text-blue-700'>
                                        Learn More
                                    </Link>
                                </motion.div>
                                <motion.img
                                    src={item.img}
                                    alt={item.name}
                                    className='h-48 w-full object-cover rounded-md'
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 1 }}
                                    whileHover={{ opacity: 0.1 }}
                                    transition={{ duration: 0.1 }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SolutionPage;