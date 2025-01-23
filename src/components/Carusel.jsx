import React, { useRef, useState, } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Carusel = ({ setOpenModal }) => {
  return (
    <>
      <Swiper
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation]}
        className="mySwiper text-white w-full max-w-[1540px]"
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        pagination-clickable="true"
      >
        <div className="swiper-button-next px-9 py-9 rounded-md hover:bg-orange-700 transition-all bg-orange-950/30"></div>
        <div className="swiper-button-prev px-9 py-9 rounded-md hover:bg-orange-700 transition-all bg-orange-950/30"></div>
        <SwiperSlide>
          <div className={`w-full pt-12 sm:pt-12 lg:pt-24 bg-[url(/src/img/sviper_img.webp)] bg-cover max-w-[1540px] h-[300px] sm:h-[300px] lg:h-[500px]`}>
            <h2 className='sm:text-3xl lg:text-5xl mb-5 sm:mb-5 lg:mb-10 font-bold tracking-wider drop-shadow-xl'>Professional o'rnatish <br />pechlar va kaminlar litsenziyalangan</h2>
            <p className='text-2xl font-medium drop-shadow-xl'>Biz shartnoma va smeta asosida ishlaymiz</p>
            <Link onClick={() => setOpenModal(true)} className='caruselLink transition-all p-5 bg-lime-600 inline-block mt-10 rounded-sm hover:bg-lime-500' >Ishlarning narxini hisoblash</Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`w-full pt-12 sm:pt-12 lg:pt-24 bg-[url(/src/img/sviper_img2.jpg)] bg-cover max-w-[1540px] h-[300px] sm:h-[300px] lg:h-[500px]`}>
            <h2 className='sm:text-3xl lg:text-5xl mb-5 sm:mb-5 lg:mb-10 font-bold tracking-wider drop-shadow-xl'>Biz individual isitish<br />proektini ishlab chiqamiz</h2>
            <p className='text-2xl font-medium drop-shadow-xl'>Barcha mehmonlarni hisobga olgan holda</p>
            <Link onClick={() => setOpenModal(true)} className='p-5 bg-lime-600 transition-all inline-block mt-10 rounded-sm  hover:bg-lime-500' >Ishlarning narxini hisoblash</Link>
          </div>
        </SwiperSlide>

        <SwiperSlide><div className='w-full pt-12 sm:pt-12 lg:pt-24 bg-[url(/src/img/sviper_img3.jpg)] bg-cover max-w-[1540px] h-[300px] sm:h-[300px] lg:h-[500px]'>
          <h2 className='sm:text-3xl lg:text-5xl mb-5 sm:mb-5 lg:mb-10 font-bold tracking-wider drop-shadow-xl'>O'rnatish ishlariga<br />2 yil kafolat beriladi</h2>
          <p className='text-2xl font-medium drop-shadow-xl'>Biz kamin, pechka va barbekyu o'rnatamiz</p>
          <Link onClick={() => setOpenModal(true)} className='p-5 bg-lime-600 transition-all inline-block mt-10 rounded-sm hover:bg-lime-500' >Ishlarning narxini hisoblash</Link>
        </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carusel