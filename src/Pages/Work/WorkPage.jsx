import React, { useState } from 'react';
import { headerData } from '../../utils/dummyData';
import { workDatas } from '../../utils/dummyData';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Footer, Header, Navbar } from '../../components';

const WorkPages = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [isHomePage, setIsHomePage] = useState(false);

    // Define the list of work items based on the selected filter
    const workItems =
        selectedFilter === 'all'
            ? Object.values(workDatas).flatMap((data) => data.items)
            : workDatas[selectedFilter].items;

    const categories = ['all', 'softwareDevelopment', 'mobileApp', 'itMasterplan', 'brandingWebsite'];

    return (
        <div className='bg-work-page min-h-screen p-14'>
            <Navbar />
            <Header title="Work" subtitle="Our Future start from what we develop." />
            <motion.div
                initial={{ opacity: 1, x: "100vw" }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className='flex justify-center mt-10'>
                {categories.map(category => (
                    <button
                        key={category}
                        className={`${selectedFilter === category ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                            } py-2 px-4 rounded-md mx-2 focus:outline-none`}
                        onClick={() => setSelectedFilter(category)}
                    >
                        {category === 'all' ? 'All Work' : category}
                    </button>
                ))}
            </motion.div>
            <div className='flex mt-10 flex-wrap justify-center white-glassmorphism'>
                {workItems.map((item, index) => (
                    <div className='mx-4 my-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4' key={index}>
                        <motion.div
                            initial={{ opacity: 1, x: "-100vw" }}
                            animate={{ opacity: 1, x: 0 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className='rounded-lg overflow-hidden shadow-lg white-glassmorphism'>
                            <motion.img
                                src={item.img}
                                alt={item.name}
                                className='object-cover w-full h-64'
                                initial={{ opacity: 1, }}
                                animate={{ opacity: 1, }}
                                whileHover={{ opacity: 0.8 }}
                                transition={{ duration: 0.5 }}
                            />
                            <div className='px-6 py-4'>
                                <h1 className='text-blue-400 font-bold text-xl border-b-2 border-gray-100 mb-2'>{item.name}</h1>
                                <p className='text-gray-100 text-base'>{item.desc}</p>
                                <motion.div
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 1 }}
                                    whileHover={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className='flex justify-end mt-4'>
                                    <Link to={`/details/${item.id}`} className='text-blue-500 font-bold'>View Details</Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
            <Footer isHomePage={isHomePage} />
        </div>
    );
};

export default WorkPages;