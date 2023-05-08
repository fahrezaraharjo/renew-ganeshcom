import React, { useState } from 'react';
import { headerData } from '../../utils/dummyData';
import { workDatas } from '../../utils/dummyData';
import { Link } from 'react-router-dom';
import { Footer, Navbar } from '../../components';


const WorkPages = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [isHomePage, setIsHomePage] = useState(false);


    // Define the list of work items based on the selected filter
    const workItems =
        selectedFilter === 'all'
            ? Object.values(workDatas).flatMap((data) => data.items)
            : workDatas[selectedFilter].items;

    return (
        <div className='bg-work-page min-h-screen'>
            <div className='gradient-bg-welcome'>
                <Navbar />
            </div>
            <div className='relative w-full h-[300px]'>
                <div className='absolute top-0 left-0 w-full h-full flex items-center justify-between'>
                    <div className='bg-black text-white bg-opacity-40 py-2 px-4 rounded-md ml-10'>
                        <h1 className='text-lg font-bold'>{headerData.work.name}</h1>
                    </div>
                    <div className='bg-black bg-opacity-40 py-2 px-4 rounded-md mr-10 w-[300px] items-start flex justify-center flex-row gap-1'>
                        <h1 className='text-lg font-bold items-center text-blue-500 text-center'>Home| </h1>
                        <h2 className='text-white items-center text-center text-lg font-bold'>{headerData.work.title}</h2>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <button
                    className={`${selectedFilter === 'all' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                        } py-2 px-4 rounded-md mx-2 focus:outline-none`}
                    onClick={() => setSelectedFilter('all')}
                >
                    All Work
                </button>
                <button
                    className={`${selectedFilter === 'softwareDevelopment'
                        ? 'bg-blue-500 text-white'
                        : 'bg-white text-gray-700'
                        } py-2 px-4 rounded-md mx-2 focus:outline-none`}
                    onClick={() => setSelectedFilter('softwareDevelopment')}
                >
                    Software Development
                </button>
                <button
                    className={`${selectedFilter === 'mobileApp' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                        } py-2 px-4 rounded-md mx-2 focus:outline-none`}
                    onClick={() => setSelectedFilter('mobileApp')}
                >
                    Mobile App
                </button>
                <button
                    className={`${selectedFilter === 'itMasterplan' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                        } py-2 px-4 rounded-md mx-2 focus:outline-none`}
                    onClick={() => setSelectedFilter('itMasterplan')}
                >
                    IT Masterplan
                </button>
                <button
                    className={`${selectedFilter === 'brandingWebsite' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                        } py-2 px-4 rounded-md mx-2 focus:outline-none`}
                    onClick={() => setSelectedFilter('brandingWebsite')}
                >
                    Branding Website
                </button>
            </div>
            <div className='flex flex-wrap justify-center'>
                {workItems.map((item, index) => (
                    <div className='mx-4 my-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4' key={index}>
                        <div className='rounded-lg overflow-hidden shadow-lg white-glassmorphism'>
                            <img src={item.img} className='object-cover w-full h-64' alt='' />
                            <div className='px-6 py-4'>
                                <h1 className='text-blue-400 font-bold text-xl mb-2'>{item.name}</h1>
                                <p className='text-gray-100 text-base'>{item.desc}</p>
                                <div className='flex justify-end mt-4'>
                                    <Link to={`/details/${item.id}`} className='text-blue-500 font-bold'>View Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer isHomePage={isHomePage} />
        </div>
    );
};

export default WorkPages;