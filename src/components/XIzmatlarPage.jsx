import React from 'react'
import { Link } from 'react-router-dom'

const XizmatlarPage = () => {
    return (
        <>
            <div className='bg-white'>
                <div className='w-full max-w-[1440px] mx-auto pb-24'>
                    <h2 className='text-4xl font-bold mb-24 pt-24'>Xizmatlar</h2>
                    <p className='tracking-wide text-2xl leading-[50px] pb-10'>
                    Ushbu blokda biz taqdim etilayotgan xizmatlar yoki taklif qilinadigan tovarlar bozorida uning ahamiyati
                     va ishonchliligini ta'kidlab, tashkilotingiz haqidagi ma'lumotlarni joylashtirishni tavsiya qilamiz. <br /><br />
                     Eslatma. Shuni esda tutingki, saytdagi matn ma'lumotlari individual bo'lishi kerak, boshqa
                      Internet-resurslardan ko'chirilmasligi kerak, bu Yandex tavsiyalarida ta'kidlangan: "Biz boshqa
                       manbalardan ma'lumotlarni nusxa ko'chiradigan va original kontent yaratmaydigan yoki yuqori darajadagi
                        saytlarni indekslamaslikka yoki reyting qilmaslikka harakat qilamiz. xizmat."
                    </p>
                    <div className='w-full max-w-[580px] space-y-5 pb-20'>
                        <Link className='bg-blue-200 pl-10 py-3 flex justify-between hover:bg-blue-300 okompanelink  text-green-600 text-2xl rounded-md'>Loyihalash<span className='pr-10'>→</span></Link>
                        <Link className='bg-blue-200 pl-10 py-3 flex justify-between hover:bg-blue-300 okompanelink  text-green-600 text-2xl rounded-md'>O'rnatish(Монтаж)<span className='pr-10'>→</span></Link>
                        <Link className='bg-blue-200 pl-10 py-3 flex justify-between hover:bg-blue-300 okompanelink  text-green-600 text-2xl rounded-md'>O'rnatish <span className='pr-10'>→</span></Link>
                        <Link className='bg-blue-200 pl-10 py-3 flex justify-between hover:bg-blue-300 okompanelink  text-green-600 text-2xl rounded-md'>Tamirlash <span className='pr-10'>→</span></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default XizmatlarPage