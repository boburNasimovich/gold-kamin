import React from 'react'
import { Link } from 'react-router-dom'
import watasp from '../img/watsapicon.svg'
import tg from '../img/tgicon.svg'
import vk from '../img/vkontakte.svg'
import ok from '../img/ok.svg'
import rutube from '../img/rutube.svg'

const KontaktCom = () => {
  return (
    <>
      <div className='w-full max-w-[1440px] mx-auto py-16'>
        <h1 className='text-4xl font-extrabold mb-16'>
          Kontaktlar
        </h1>
        <div className='flex items-center justify-between'>
          <div>
            <div className='flex items-center space-x-4 mb-6'>
              <Link className='text-3xl font-bold'>+7 (000) 000-00-00</Link>
              <Link to={'https://api.whatsapp.com/send/?text=megagroup&type=custom_url&app_absent=0'} target='blank'><img className='w-10 h-10' src={watasp} alt="#" /></Link>
              <Link to={'https://t.me/megagroup?roistat_visit=28791898'} target='blank'><img className='w-10 h-10' src={tg} alt="#" /></Link>
            </div>
            <p className='leading-[60px] text-2xl'>
              Dushanba-Juma 11:00 dan 21:00 gacha <br />
              Dam olish kunlari: Shanba-Yakshanba <br />
              г. Москва, ул. Ленинская, дом 0, корп 0, офис 0 <br />
              <Link to={'mail@company.ru'} className='text-blue-800' target='blank'>mail@company.ru</Link> <br />
              ИНН 000000000 ОГРН 000000000
            </p>
            <div className='flex items-center space-x-4 mt-6'>
              <Link to={'https://api.whatsapp.com/send/?text=megagroup&type=custom_url&app_absent=0'} target='blank'><img className='rounded-md hover:opacity-70' src={vk} alt="#" /></Link>
              <Link to={'https://ok.ru/?roistat_visit=28791898'} target='blank'><img className='rounded-md hover:opacity-70' src={ok} alt="#" /></Link>
              <Link to={'https://rutube.ru/?roistat_visit=28791898'} target='blank'><img className='rounded-md hover:opacity-70' src={rutube} alt="#" /></Link>
            </div>
          </div>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d143773.8128434911!2d37.62085174113812!3d55.73303485985401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smoskva!5e0!3m2!1sen!2s!4v1712425766142!5m2!1sen!2s"
            className='w-[850px] h-[450px]' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default KontaktCom