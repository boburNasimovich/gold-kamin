import React from 'react';
import { Link } from 'react-router-dom';
import { items } from '../data';

const Usluge = () => {

    return (
        <div className='bg-[#3a1c0a] sm:pt-8 pt-5 lg:pt-16'>
            <div className='w-full max-w-[1440px] mx-auto pb-14'>
                <h3 className='text-2xl sm:text-center lg:text-left text-center sm:text-3xl lg:text-5xl font-bold text-white sm:pb-6 pb-4 lg:pb-10'>Asosiy xizmatlar</h3>
                <div className='flex lg:flex-row sm:flex-col flex-col items-stretch  justify-between space-y-8 lg:space-y-0'>
                    {
                        items.map((item) => {
                            return (
                                <div className='xizmatlar w-full max-w-[830px] sm:max-w-[830px] mx-auto lg:max-w-[330px] bg-white p-5' key={item.id}>
                                    <Link to={item.nomi} className='lg:block sm:flex flex items-center sm:justify-around '>
                                        <div className='overflow-hidden '>
                                            <img className='rasm max-w-[230px] sm:max-w-[250px] lg:max-w-[300px]' src={item.rasm} alt="#" />
                                        </div>
                                        <div className='max-w-[400px] sm:max-w-[400px] lg:max-w-[300px]'>
                                            <h4 className='text-3xl font-semibold my-5'>{item.nomi}</h4>
                                            <p className='opacity-55'>{item.matn}</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                </div>
                <Link className='uslugelink p-5 bg-orange-600 hover:bg-orange-500 inline-block rounded-sm mt-8 text-white text-2xl font-semibold'>Hamma xizmatlar</Link>
            </div>
        </div>
    );
}

export default Usluge;