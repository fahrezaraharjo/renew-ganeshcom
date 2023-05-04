import React, { useState } from 'react';
import { headerData } from '../../utils/dummyData';
import { workDatas } from '../../utils/dummyData';

const WorkPages = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');

    // Define the list of work items based on the selected filter
    const workItems =
        selectedFilter === 'all'
            ? Object.values(workDatas).flatMap((data) => data.items)
            : workDatas[selectedFilter].items;

    return (
        <div className='bg-work-page'>
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
            <div className='flex flex-wrap justify-center mt-10'>
                {workItems.map((item, index) => (
                    <div className='mx-4 my-4' key={index}>
                        <div className='w-64'>
                            <img src={item.img}
                                alt={item.name}
                                className='w-full h-48 object-cover rounded-md'
                            />
                            <div className='bg-white rounded-md px-4 py-2 mt-2'>
                                <h1 className='font-bold text-lg'>{item.name}</h1>
                                <p className='text-gray-600 mt-2'>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkPages;