import React from 'react'
import otzivchi from '../img/Otzivchi.webp'
import otzivchi2 from '../img/Otzivchi2.webp'
import otzivchi3 from '../img/Otzivchi3.webp'
import { Link } from 'react-router-dom'

const OtzivONasCom = () => {
    return (
        <>
            <div className='w-full max-w-[1440px] mx-auto py-12 space-y-10'>
                <h1 className='text-4xl font-bold py-10'>Biz haqimizda sharhlar</h1>
                <div className='flex  justify-between'>
                    <div className='w-full max-w-[460px] space-y-4'>
                        <p className='text-lg tracking-wide'>Mijozlarga do'stona yondashuv va sodiqlikni ta'kidlamoqchiman va bu har doim o'zaro aloqa
                            jarayonini yoqimli va samarali qilishga yordam beradi. Bizning ehtiyojlarimiz va umidlarimiz
                            bilan chin dildan qiziqayotganingiz juda yaxshi. Hamkorlik men uchun yoqimli tajriba bo'ldi.</p>
                        <div className='flex space-x-5 items-center'>
                            <img className='w-20 h-20 rounded-full' src={otzivchi} alt="otzivchi" />
                            <p className='font-bold text-2xl'>Kirill Yakovlev</p>
                        </div>
                    </div>
                    <div className='w-full max-w-[460px] space-y-4'>
                        <p className='text-lg tracking-wide'>Men bu erga birinchi marta kelishim emas va ishonch bilan ayta olamanki,
                            siz juda yaxshi ish qilasiz! Men yuqori professionallik, mas'uliyat va mijozga nisbatan sezgir munosabatni
                            qadrlayman. Ajoyib ish uchun rahmat!</p>
                        <div className='flex space-x-5 items-center'>
                            <img className='w-20 h-20 rounded-full' src={otzivchi2} alt="otzivchi" />
                            <p className='font-bold text-2xl'>Aleksandra Somova</p>
                        </div>
                    </div>
                    <div className='w-full max-w-[460px] space-y-4'>
                        <p className='text-lg tracking-wide'>Menga iliq va professional yondashuv uchun juda minnatdorman. Mas'uliyatingiz,
                            ochiqligingiz va yordam berishga tayyorligingiz uchun tashakkur. Men sizni doimo do'stlarim va tanishlarimga tavsiya qilaman.</p>
                        <div className='flex space-x-5 items-center'>
                            <img className='w-20 h-20 rounded-full' src={otzivchi3} alt="otzivchi" />
                            <p className='font-bold text-2xl'>Aleksandr Yagudin</p>
                        </div>
                    </div>
                </div>
                <Link className='bg-blue-600 text-center w-[210px] py-3 block hover:opacity-85 hover:text-white okompanelink  text-green-600 text-xl rounded-md'>Sharh qoldirish</Link>
            </div>
        </>
    )
}

export default OtzivONasCom