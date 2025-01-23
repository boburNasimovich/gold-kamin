import React from 'react'
import TepagaChiqishLink from './Link'
import { Link } from 'react-router-dom'
import tgIcon from '../img/tg-icon.png'
import watsap from '../img/whatsapp.png'
import tinkof from '../img/tinkoff.svg'
import mir from '../img/mir_1.svg'
import sber from '../img/sber.svg'
import yandex from '../img/yandexicon.png'
import vkicon from '../img/vkontakte.svg'
import okicon from '../img/ok.svg'
import rutube from '../img/rutube.svg'


const Footer = () => {
  return (
    <>
      <div className="bg-orange-950 pt-16 pb-16">
        <div className="w-full max-w-[1440px] mx-auto flex justify-between">
          <div className='text-white'>
            <div className=' space-y-3 pb-16'>
              <span className='opacity-55 text-2xl'>Telefon orqali so'rov qoldiring:</span>
              <Link className='flex items-center text-3xl font-bold tracking-wide'>+7 (000) 123 45 67 <img className='w-12 h-12 ml-3' src={tgIcon} alt="#" /></Link>
              <Link className='flex items-center text-3xl font-bold tracking-wide'>+7 (000) 123 45 67 <img className='w-10 h-10 ml-4' src={watsap} alt="#" /></Link>
            </div>
            <span className='opacity-55 text-2xl'>Ofis manzili:</span>
            <p className='text-2xl tracking-wide pb-16'>Moskva sh. Leninskiy prospekt, dom</p>
            <Link className='end-link'>test@example.com</Link>
          </div>
          <div>
            <Link to={'/'}><p className='text-white opacity-55 text-2xl p-3 footerLink'>Asosiy</p></Link>
            <Link to={'Okompane'}><p className='text-white opacity-55 text-2xl p-3 footerLink'>Kompaniya haqida</p></Link>
            <Link to={'UslugePage'}><p className='text-white opacity-55 text-2xl p-3 footerLink'>Xizmatlar</p></Link>
            <Link to={'KatalogPage'}><p className='text-white opacity-55 text-2xl p-3 footerLink'>Katalog</p></Link>
            <Link to={'VidOtdelkiPage'}><p className='text-white opacity-55 text-2xl p-3 footerLink'>O'rnatish turlari</p></Link>
            <Link to={'PriceList'}><p className='text-white opacity-55 text-2xl p-3 footerLink'>Narxlar ro'yxati</p></Link>
            <Link to={'NashiRaboti'}><p className='text-white opacity-55 text-2xl p-3 footerLink'>Bizning ishlar</p></Link>
            <Link to={'Aksiyalar'}><p className='text-white opacity-55 text-2xl p-3 footerLink'>Aksiyalar</p></Link>
            <Link to={'Kontakt'}><p className='text-white opacity-55 text-2xl p-3 footerLink'>Kontaktlar</p></Link>
          </div>
          <div>
            <span className='text-2xl text-white opacity-55'>To'lov turlari:</span>
            <div className='flex space-x-5 mt-3'>
              <div className='px-2 bg-white rounded-md'>
                <img className='w-[70px] h-12 py-3 bg-white' src={tinkof} alt="#" />
              </div>
              <div className='px-2 bg-white rounded-md'>
                <img className='w-[70px] h-12 py-3 bg-white' src={mir} alt="#" />
              </div>
              <div className='px-2 bg-white rounded-md'>
                <img className='w-[70px] h-12 py-3 bg-white' src={sber} alt="#" />
              </div>
            </div>
            <div className='mt-10'>
              <span className='text-2xl text-white opacity-55'>Bizning ijtimoiy tarmoqlarimiz:</span>
              <div className='flex items-center space-x-4 mt-6 mb-44'>
                <Link><img className='rounded-md hover:opacity-70' src={vkicon} alt="#" /></Link>
                <Link><img className='rounded-md hover:opacity-70' src={okicon} alt="#" /></Link>
                <Link><img className='rounded-md hover:opacity-70' src={rutube} alt="#" /></Link>
                <Link><img className='rounded-md w-[60px] h-[60px] bg-white p-5 hover:opacity-70' src={yandex} alt="#" /></Link>
              </div>
              <TepagaChiqishLink />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
