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
                            <Card key={index} imageUrl={item.imageUrl} name={item.name} description={item.description} id={item.id} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SolutionPage;