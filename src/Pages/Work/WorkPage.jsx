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
        <div className='bg-work-page min-h-screen'>
            <div className='p-14 pt-20'>
                <Header title="Work" subtitle="Our Future start from what we develop." />
                <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                    className='flex justify-center mt-10'>
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`${selectedFilter === category ? 'white-glassmorphism text-green-300' : 'blue-glassmorphism text-blue-400'
                                } py-2 px-4 rounded-md mx-2 focus:outline-none `}
                            onClick={() => setSelectedFilter(category)}
                        >
                            {category === 'all' ? 'All Work' : category}
                        </button>
                    ))}
                </motion.div>
                <div className='flex mt-10 flex-wrap justify-center white-glassmorphism'>
                    {workItems.map((item, index) => (
                        <div className='mx-4 my-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4' key={index}>
                            <div className='rounded-lg overflow-hidden shadow-lg white-glassmorphism' style={{ height: '500px' }}>
                                <div className='w-full h-1/2'>
                                    <motion.img
                                        src={item.img}
                                        alt={item.name}
                                        className='w-full h-full object-cover'
                                        initial={{ opacity: 1 }}
                                        animate={{ opacity: 1 }}
                                        whileHover={{ opacity: 0.8 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                                <div className='w-full px-6 py-4 flex flex-col' style={{ height: '250px' }}>
                                    <div className='p-1'>
                                        <Link to={`/details/${item.id}`} className='text-blue-500 font-bold'>
                                            <h1 className='text-blue-400 font-bold text-xl border-b-2 border-gray-100 mb-2'>{item.name}</h1>
                                        </Link>
                                    </div>
                                    <div className='overflow-hidden text-gray-100 text-base h-20'>
                                        <p>{item.desc.split(' ').slice(0, 20).join(' ')}{item.desc.split(' ').length > 20 ? '...' : ''}</p>
                                    </div>
                                    <div className='flex justify-end mt-auto'>
                                        <Link to={`/details/${item.id}`} className='text-blue-500 font-bold'>View Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Footer isHomePage={isHomePage} />
            </div>
        </div >
    );
};

export default WorkPages;