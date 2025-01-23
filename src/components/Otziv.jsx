import React, { useRef, useState, } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Pagination } from 'swiper/modules';


const Otziv = () => {
    return (
        <>
            <div className='w-full max-w-[1440px] mx-auto pb-10'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-5xl font-bold pb-10 pt-16'>Xaridorlar sharhlari</h2>
                    <Link className='uslugelink p-5 bg-orange-600 hover:bg-orange-500 inline-block rounded-sm mt-8 text-white text-2xl font-semibold'>Sharh qoldirish</Link>
                </div>
                <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper text-white w-full max-w-[1540px]"
      >
                    <SwiperSlide className='swiper2 flex flex-col'>
                        <div className={`w-full  bg-white   py-5  bg-cover max-w-[700px]`}>
                            <p className='text-2xl text-black opacity-55'>Yuqori sifatli, batafsil ko'rib chiqish mahsulotning asosiy mezonlarini qamrab oladi va foydalanish shartlarini
                                aniqlash imkonini beradi. Bu biznes strategiyasining birinchi samarali
                                vositasi bo'lib, potentsial mijozlarga tanlov qilishga yordam beradi va xaridni rag'batlantiradi.</p>
                        </div>
                        <h3 className='text-black text-4xl font-bold pt-5'>Viktoriya</h3>
                    </SwiperSlide>
                    <SwiperSlide className='swiper2 flex flex-col'>
                        <div className={`w-full  bg-white   py-5  bg-cover max-w-[700px]`}>
                            <p className='text-2xl text-black opacity-55'>Yuqori sifatli, batafsil ko'rib chiqish mahsulotning asosiy mezonlarini qamrab oladi va foydalanish shartlarini
                                aniqlash imkonini beradi. Bu biznes strategiyasining birinchi samarali
                                vositasi bo'lib, potentsial mijozlarga tanlov qilishga yordam beradi va xaridni rag'batlantiradi.</p>
                        </div>
                        <h3 className='text-black text-4xl font-bold pt-5'>Vasiliy Smirnov</h3>
                    </SwiperSlide>
                    <SwiperSlide className='swiper2 flex flex-col'>
                        <div className={`w-full  bg-white   py-5  bg-cover max-w-[700px]`}>
                            <p className='text-2xl text-black opacity-55'>Yuqori sifatli, batafsil ko'rib chiqish mahsulotning asosiy mezonlarini qamrab oladi va foydalanish shartlarini
                                aniqlash imkonini beradi. Bu biznes strategiyasining birinchi samarali
                                vositasi bo'lib, potentsial mijozlarga tanlov qilishga yordam beradi va xaridni rag'batlantiradi.</p>
                        </div>
                        <h3 className='text-black text-4xl font-bold pt-5'>Viktoriya</h3>
                    </SwiperSlide>
                    <SwiperSlide className='swiper2 flex flex-col'>
                        <div className={`w-full  bg-white   py-5  bg-cover max-w-[700px]`}>
                            <p className='text-2xl text-black opacity-55'>Yuqori sifatli, batafsil ko'rib chiqish mahsulotning asosiy mezonlarini qamrab oladi va foydalanish shartlarini
                                aniqlash imkonini beradi. Bu biznes strategiyasining birinchi samarali
                                vositasi bo'lib, potentsial mijozlarga tanlov qilishga yordam beradi va xaridni rag'batlantiradi.</p>
                        </div>
                        <h3 className='text-black text-4xl font-bold pt-5'>Vasiliy Smirnov</h3>
                    </SwiperSlide>
                    <SwiperSlide className='swiper2 flex flex-col'>
                        <div className={`w-full  bg-white   py-5  bg-cover max-w-[700px]`}>
                            <p className='text-2xl text-black opacity-55'>Yuqori sifatli, batafsil ko'rib chiqish mahsulotning asosiy mezonlarini qamrab oladi va foydalanish shartlarini
                                aniqlash imkonini beradi. Bu biznes strategiyasining birinchi samarali
                                vositasi bo'lib, potentsial mijozlarga tanlov qilishga yordam beradi va xaridni rag'batlantiradi.</p>
                        </div>
                        <h3 className='text-black text-4xl font-bold pt-5'>Viktoriya</h3>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

export default Otziv