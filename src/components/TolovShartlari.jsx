import React from 'react'
import { Link } from 'react-router-dom'

const TolovShartlari = () => {
  return (
    <>
      <div className='w-full max-w-[1440px] mx-auto'>
          <h2 className='text-4xl font-bold my-10'>To'lov shartlari</h2>
          <p className='text-2xl '>Ushbu blokda siz taqdim etayotgan xizmatlar haqida kirish maqolasini ham, takliflarning to'liq katalogini ham joylashtirishingiz mumkin.
            <br /><br />
            Xizmatlarni tematik toifalarga ajratish foydali bo'lishi mumkin.
            <br /><br />
            Xizmat haqida batafsil ma'lumot, turli xarakteristikalar, rasmlar, narxlar, qo'llaniladigan chegirmalar va joriy aktsiyalar va boshqalar haqida ma'lumotni o'z ichiga olgan xizmat kartalari bo'lishi mumkin. batafsil tavsif va buyurtma berish imkoniyati bilan xizmat sahifasiga o'tish imkoniyati bilan.
          </p>
          <h2 className='text-4xl font-bold my-10'>Bunday bo'limni to'ldirishga misol:</h2>
          <p className='text-2xl'>Bizning mutaxassislarimiz sizga har doim keng ko'lamli xizmatlarni taklif qilishdan mamnun. Bizning xodimlarimiz sizga hamrohlik qilishga va yo'l-yo'riq ko'rsatishga tayyor bo'lgan faqat yuqori malakali, tajribali xodimlardan iborat. <br /><br />
            Taqdim etilgan xizmatlar orasida sizga quyidagilar taqdim etilishi mumkin:</p>
          <ul className='my-10 text-2xl'>
            <li><b>• Kredit berish va maslahat berish.</b> Bizning xodimlarimiz sizga eng qulay kredit shartlarini tanlashda yordam beradi, sizga barcha nozikliklar va nuanslar haqida aytib beradi va agar kerak bo'lsa, barcha kerakli hujjatlarni to'plashda yordam beradi. Kredit olish uchun tezda bizning ofisimizga murojaat qilish mumkin.</li>
            <li><b>• Kafolat xizmati.</b> Har qanday mahsulotimiz bepul kafolatli xizmat va kafolatdan keyingi pullik yordam bilan ta'minlanadi.</li>
            <li><b>• Komponentlar, aksessuarlar va boshqa ko'p narsalarni buyurtma qiling.</b> Bizning do'konlarimizda siz har doim o'zingizni qiziqtirgan mahsulotga buyurtma berishingiz mumkin. Agar siz izlayotgan mahsulot omborda yoki hatto katalogda bo'lmasa ham, siz har doim bizning xodimlarimizga so'rov qoldirishingiz va so'rovingizga yaqin vaqt ichida javob olishingiz mumkin.</li>
            <li><b>• Sotib olish va almashtirish.</b> Bizdan sotib olingan mahsulotlar endi sizning ehtiyojlaringizni qondirmaydimi? Yangisini sotib olmoqchimisiz? Bizning professional baholovchilarimizga murojaat qilish kifoya, ularga sizda qanday tovarlar borligi, ular qanday holatda ekanligi, qanday narx belgilamoqchisiz yoki nimaga almashtirishni va hokazolarni aytsangiz, bizning xodimlarimiz sizni ortiqcha ovoragarchilikdan xalos qiladi.</li>
          </ul>
        <div className='my-10'>
          <Link to={'/TolovUsullariPage'} className='bg-blue-200 max-w-[400px] pl-10 py-3 flex justify-between hover:bg-blue-300 okompanelink  text-green-600 text-2xl rounded-md'>To'lov usullari<span className='pr-10'>→</span></Link>
        </div>
      </div>
    </>
  )
}

export default TolovShartlari