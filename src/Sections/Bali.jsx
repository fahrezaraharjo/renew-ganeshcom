import React from 'react';
import { bali1, getin } from '../../images';

const Bali = () => {
    return (
        <div className='w-full py-4 md:py-12 min-h-screen'>
            <div className='flex flex-col md:flex-row items-center justify-center md:justify-between md:max-w-5xl mx-auto'>
                <div className='text-center md:text-right mb-4 md:mb-0 justify-center flex items-center'>
                    <p className='text-white text-center'>
                        Born with Love in Paradise Island.
                        <br />
                        The Island of God.
                        <br />
                        <br />
                        BALI - INDONESIA
                    </p>
                </div>
                <div className='bg-white w-1 h-40'>

                </div>
                <div className='w-1/2 mb-14'>
                    <img src={bali1} alt='' className='h-auto w-full' />
                </div>
            </div>
            <div className='w-full mt-36 md:max-w-5xl mx-auto h-72 md:h-[370px] shadow-md justify-center items-center flex'>
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