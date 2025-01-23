import React from 'react'
import pechka from '../img/pechka.webp'
import greenicon from '../img/greenicon.svg'
import greenicon2 from '../img/greenicon2.svg'
import greenicon3 from '../img/greenicon3.svg'
import greenicon4 from '../img/greenicon4.svg'

const About = () => {
    return (
        <>
            <div className='w-full max-w-[1520px] py-24 px-10 flex justify-between mx-auto'>
                <div className="w-full max-w-[980px]">
                    <h3 className='text-5xl font-bold pb-10'>Kompaniyamiz haqida</h3>
                    <p className='tracking-wide text-xl opacity-55'>Kompaniyamiz tom yopish va fasad materiallarini sotish va o'rnatishga ixtisoslashgan. <br /><br />
                        Biz sizga yetakchi xorijiy va mahalliy ishlab chiqaruvchilarning tom yopish va fasad <br /> materiallarining keng assortimentini
                        raqobatbardosh narxlarda taklif etamiz. Biz sizni<br /> qiziqtirgan materiallar bo'yicha batafsil maslahat beramiz, tomni
                        o'rnatish yoki jabhalarni<br /> tugatish uchun kerak bo'lgan hamma narsani tanlashga yordam beramiz va optimal<br /> hisob-kitoblarni
                        amalga oshiramiz.  Biz sizni qiziqtirgan materiallar bo'yicha batafsil maslahat<br /> beramiz, tomni o'rnatish yoki jabhalarni
                        tugatish uchun kerak bo'lgan hamma narsani tanlashga<br /> yordam beramiz va optimal hisob-kitoblarni amalga oshiramiz.</p>
                    <div className='grid grid-cols-2 gap-6 pt-32'>
                        <div className='w-full max-w-[420px] hover:-translate-y-4 transition-transform flex space-x-5 items-center'>
                            <img className='w-[80px] h-[80px] p-4 bg-lime-500 rounded-md' src={greenicon} alt="#" />
                            <p className='text-xl font-bold'>Muhandislik yechimlarini ishlab chiqish</p>
                        </div>
                        <div className='w-full max-w-[420px] hover:-translate-y-4 transition-transform flex space-x-5 items-center'>
                            <img className='w-[80px] h-[80px] p-4 bg-lime-500 rounded-md' src={greenicon2} alt="#" />
                            <p className='text-xl font-bold'>Malakali mutaxassislar</p>
                        </div>
                        <div className='w-full max-w-[420px] hover:-translate-y-4 transition-transform flex space-x-5 items-center'>
                            <img className='w-[80px] h-[80px] p-4 bg-lime-500 rounded-md' src={greenicon3} alt="#" />
                            <p className='text-xl font-bold'>SRO roziligi</p>
                        </div>
                        <div className='w-full max-w-[420px] hover:-translate-y-4 transition-transform flex space-x-5 items-center'>
                            <img className='w-[80px] h-[80px] p-4 bg-lime-500 rounded-md' src={greenicon4} alt="#" />
                            <p className='text-xl font-bold'>Har qanday murakkablikdagi ishning kafolatlangan sifati</p>
                        </div>
                    </div>

                </div>
                <img className='w-[460px] h-[490px]' src={pechka} alt="#" />
            </div>
        </>
    )
}

export default About