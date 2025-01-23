import React from 'react'
import { Link } from 'react-router-dom'

import stat from '../img/stat.webp'
import stat2 from '../img/stat2.webp'
import stat3 from '../img/stat3.webp'

const Maslaxatlar = () => {
    return (
        <div className='bg-[#D5CCC7] pt-16'>
            <div className='w-full max-w-[1440px] mx-auto pb-16'>
                <h3 className='text-5xl font-bold text-black pb-10'>
                    Qurilmalar turlari</h3>
                <div className='grid grid-cols-3 gap-5 mx-auto'>
                    <div className='stats w-full max-w-[460px] hover:bg-orange-600 hover:text-white transition-all space-y-5 bg-white p-8'>
                        <Link><img className='rasm pb-5' src={stat} alt="#" /></Link>
                        <span className='opacity-55 '>23.09.2022</span>
                        <h4 className='text-2xl font-bold'>Pechka yoki kaminni o'rnatish qoidalari</h4>
                        <p className='opacity-55 tracking-wide'>Kapital pechkalar yoki kaminlar alohida poydevorga o'rnatiladi.</p>
                    </div>
                    <div className='stats w-full max-w-[460px] hover:bg-orange-600 hover:text-white transition-all space-y-5 bg-white p-8'>
                        <Link><img className='rasm pb-5' src={stat2} alt="#" /></Link>
                        <span className='opacity-55 '>23.03.2022</span>
                        <h4 className='text-2xl font-bold'>Pechka va kaminlarni tugatish</h4>
                        <p className='opacity-55 tracking-wide'>Pechni qoplash uchun eng keng tarqalgan material keramik plitkalardir.</p>
                    </div>
                    <div className='stats w-full max-w-[460px] hover:bg-orange-600 hover:text-white transition-all space-y-5 bg-white p-8'>
                        <Link><img className='rasm pb-5' src={stat3} alt="#" /></Link>
                        <span className='opacity-55 '>20.03.2022</span>
                        <h4 className='text-2xl font-bold'>Isitish pechini qanday tanlash mumkin?</h4>
                        <p className='opacity-55 tracking-wide'>Pech ishlaydigan sharoitlarni hisobga olish kerak. Xonaning turi ham muhimdir.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maslaxatlar