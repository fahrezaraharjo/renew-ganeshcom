import React from 'react';
import { bali1, getin } from '../../images';

const Bali = () => {
    return (
        <div className='w-full py-4 md:py-12 h-screen'>
            <div className='flex flex-col md:flex-row items-center justify-center md:justify-between md:max-w-5xl mx-auto'>
                <div className='text-center md:text-right mb-4 md:mb-0'>
                    <p className='text-white'>
                        Born with Love in Paradise Island.
                        <br />
                        The Island of God.
                        <br />
                        <br />
                        BALI - INDONESIA
                    </p>
                </div>
                <div className='w-1/2 md:w-auto md:mx-8 lg:mx-16'>
                    <img src={bali1} alt='' className='h-auto w-full' />
                </div>
            </div>
            <div className='w-full md:max-w-5xl mx-auto h-72 md:h-[370px] shadow-md justify-center items-center flex mt-10'>
                <img
                    src={getin}
                    alt='getin'
                    className='object-cover w-full h-full items-center justify-center'
                />
            </div>
        </div>
    );
};

export default Bali;