import React from 'react'
import { Link } from 'react-router-dom'

const Okompani = () => {
    return (
        <>
            <div className='bg-white'>
                <div className='w-full max-w-[1440px] mx-auto pb-24'>
                    <h2 className='text-4xl font-bold mb-24 pt-24'>Kompaniya haqida</h2>
                    <p className='tracking-wide text-2xl leading-[50px] pb-10'>"<span className='text-red-600'>kompaniya nomini kiriting</span>" kompaniyasiga xush kelibsiz ! <br />
                        ..."<span className='text-red-600'>kompaniya nomini kiriting"</span> - sohada jadal rivojlanayotgan kompaniya ... "<span className='text-red-600'>faoliyat sohasini ko'rsating.</span>" <br />
                        Sizga eng yaxshi narxlarda ... "<span className='text-red-600'>taklif qilinayotgan xizmatlarni belgilang</span>" bo'yicha keng ko'lamli xizmatlarni taklif qilishdan mamnunmiz. <br />
                        yoki <br />
                        Biz sizga keng assortimentni taklif qilishdan mamnunmiz ... eng yaxshi narxlarda "<span className='text-red-600'>taklif qilinayotgan mahsulotlarni belgilang</span>". <br />
                        Allaqachon... "<span className='text-red-600'>iltimos, kompaniyaning ish tajribasini ko'rsating</span>" yillar davomida kompaniyamiz bozorda kuchli o'rinni egallab kelmoqda va faqat eng zamonaviy echimlarni taqdim etib, mijozlarimizga veb-sayt orqali buyurtma berish imkonini beradi. <br />
                        Muvaffaqiyatli ish yillarida kompaniya ... "<span className='text-red-600'>kompaniya nomini kiriting</span>" bebaho tajribaga ega bo'ldi, buni mijozlarimizning xushomadgo'y sharhlari tasdiqlaydi. <br />
                        Buyurtma berishda savollaringiz bo'lsa, har doim bizning yordam markazimizga qo'ng'iroq qilib, "<span className='text-red-600'>telefon raqamini kiriting</span>" yoki veb-saytdagi onlayn maslahatchi yordamida murojaat qilishingiz mumkin.</p>
                    <div className='w-full max-w-[580px] space-y-5 pb-20'>
                        <Link className='bg-blue-200 pl-10 py-3 flex justify-between hover:bg-blue-300 okompanelink  text-green-600 text-2xl rounded-md'>To'lov shartlari <span className='pr-10'>→</span></Link>
                        <Link className='bg-blue-200 pl-10 py-3 flex justify-between hover:bg-blue-300 okompanelink  text-green-600 text-2xl rounded-md'>Biz haqimizda sharhlar <span className='pr-10'>→</span></Link>
                        <Link className='bg-blue-200 pl-10 py-3 flex justify-between hover:bg-blue-300 okompanelink  text-green-600 text-2xl rounded-md'>Fotogalereya <span className='pr-10'>→</span></Link>
                    </div>
                    <div className='space-x-5'>
                        <Link className='bg-blue-600 pl-10 py-3 inline-block justify-between hover:opacity-85 hover:text-white okompanelink  text-green-600 text-2xl rounded-md'>Asosiy tugma<span className='pr-10'>→</span></Link>
                        <Link className='bg-blue-200 pl-10 py-3 inline-block justify-between hover:bg-blue-300 okompanelink  text-green-600 text-2xl rounded-md'>ikkinchi darajali tugma<span className='pr-10'>→</span></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Okompani