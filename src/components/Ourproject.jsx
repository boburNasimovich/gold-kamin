import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import project from '../img/project.webp'
import project2 from '../img/project2.webp'
import project3 from '../img/project3.webp'
import project4 from '../img/project4.webp'
import project5 from '../img/project5.webp'
import project6 from '../img/project6.webp'
import project7 from '../img/project7.webp'
import project8 from '../img/project8.webp'

export default function Ourproject() {
    return (
        <>
        <div className='bg-[#3a1c0a] py-16'>
            <div className='w-full max-w-[1440px] mx-auto'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-5xl text-white font-bold pb-10 pt-16'>Bizning ishlar</h2>
                    <Link className='uslugelink p-5 bg-orange-600 hover:bg-orange-500 inline-block rounded-sm mt-8 text-white text-2xl font-semibold'>Hamma ishlar</Link>
                </div>
                <Swiper className='grid'
                    slidesPerView={4}
                    spaceBetween={30} 
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                >
                    <SwiperSlide><Link><img className='w-full max-w-[300px]' src={project} alt="#" /></Link></SwiperSlide>
                    <SwiperSlide><Link><img className='w-full max-w-[300px]' src={project2} alt="#" /></Link></SwiperSlide>
                    <SwiperSlide><Link><img className='w-full max-w-[300px]' src={project5} alt="#" /></Link></SwiperSlide>
                    <SwiperSlide><Link><img className='w-full max-w-[300px]' src={project4} alt="#" /></Link></SwiperSlide>
                    <SwiperSlide><Link><img className='w-full max-w-[300px]' src={project5} alt="#" /></Link></SwiperSlide>
                    <SwiperSlide><Link><img className='w-full max-w-[300px]' src={project6} alt="#" /></Link></SwiperSlide>
                    <SwiperSlide><Link><img className='w-full max-w-[300px]' src={project7} alt="#" /></Link></SwiperSlide>
                    <SwiperSlide><Link><img className='w-full max-w-[300px]' src={project} alt="#" /></Link></SwiperSlide>

                </Swiper>
            </div>
        </div>
        </>
    );
}
