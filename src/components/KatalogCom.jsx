import React from 'react'
import { Link } from 'react-router-dom'

const KatalogCom = () => {
    return (
        <>
            <div className='bg-white'>
                <div className='w-full max-w-[1440px] mx-auto pb-24'>
                    <h2 className='text-4xl font-bold mb-24 pt-24'>Katalog</h2>
                    <p className='tracking-wide text-2xl leading-[50px] pb-10'>
                        Ushbu blokda mahsulot/xizmatlaringiz tavsifi, taklif etilayotgan mahsulotlarning xarakteristikalari haqida gapirib, biznesingiz vazifalariga mos keladigan har qanday qulay katalog tuzilmasini yaratishni o'z ichiga olgan to'liq katalogni joylashtirishni tavsiya qilamiz. <br /><br />

                        Eslatma. Shuni esda tutingki, saytdagi matn ma'lumotlari individual bo'lishi kerak, boshqa Internet-resurslardan ko'chirilmasligi kerak, bu Yandex tavsiyalarida ta'kidlangan: "Biz boshqa manbalardan ma'lumotlarni nusxa ko'chiradigan va original kontent yaratmaydigan yoki yuqori darajadagi saytlarni indekslamaslikka yoki reyting qilmaslikka harakat qilamiz. xizmat." <br /><br />

                        Sahifani to'ldirishga misol: <br /><br />

                        Kompaniyaning asosiy faoliyati - ishlab chiqarish va sotish ... (kompaniyangiz faoliyat sohasini ko'rsating). "..." (Kompaniya nomini kiriting) kompaniyasining mahsulotlari... sohasida keng qo'llaniladi (Faoliyat sohasini ko'rsating). Biz eng talabchan iste'molchining ehtiyojlarini qondirishga qodirmiz, chunki taklif etilayotgan barcha mahsulotlar Evropa sifati va keng turdagi mahsulotlar hech kimni befarq qoldirmaydi. <br /><br />

                        Ishonchlilik va sifatga e'tibor qaratgan holda, bizning narxlarimiz yoqimli darajada pastligicha qolmoqda. Barcha mahsulotlar sertifikatlangan va xavfsizlik talablariga javob beradi / sifat standartlariga / GOSTlarga javob beradi.<br /><br />

                        Kompaniyaning asosiy faoliyati - bu... sohasida xizmatlar ko'rsatish (kompaniyangiz faoliyat sohasini ko'rsating). Barcha ishlar ko'p yillik tajribaga ega bo'lgan professionallar jamoasi tomonidan amalga oshiriladi ... (kompaniyangiz tomonidan taqdim etiladigan maxsus xizmatlarni ko'rsating).<br /><br />

                        Bunday arzon narxlarda biz sizga eng qisqa vaqt, qulay vaqt va beqiyos sifatni taklif qilmoqchimiz!<br /><br />
                    </p>
                    <div className='w-full max-w-[580px] space-y-5 pb-20'>
                        <Link className='bg-blue-200 pl-10 py-3 flex justify-between hover:bg-blue-300 okompanelink  text-green-600 text-2xl rounded-md'>Kaminlar<span className='pr-10'>→</span></Link>
                        <Link className='bg-blue-200 pl-10 py-3 flex justify-between hover:bg-blue-300 okompanelink  text-green-600 text-2xl rounded-md'>Pechlar<span className='pr-10'>→</span></Link>
                        <Link className='bg-blue-200 pl-10 py-3 flex justify-between hover:bg-blue-300 okompanelink  text-green-600 text-2xl rounded-md'>Barbekyu <span className='pr-10'>→</span></Link>
                        <Link className='bg-blue-200 pl-10 py-3 flex justify-between hover:bg-blue-300 okompanelink  text-green-600 text-2xl rounded-md'>Demaxod <span className='pr-10'>→</span></Link>
                        <Link className='bg-blue-200 pl-10 py-3 flex justify-between hover:bg-blue-300 okompanelink  text-green-600 text-2xl rounded-md'>Biokamin<span className='pr-10'>→</span></Link>
                        <Link className='bg-blue-200 pl-10 py-3 flex justify-between hover:bg-blue-300 okompanelink  text-green-600 text-2xl rounded-md'>Elektrkamin<span className='pr-10'>→</span></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KatalogCom