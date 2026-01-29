// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import locationImg from '../img/location.png'
import phoneImg from '../img/phone.png'
import Modal from './Modal';

// eslint-disable-next-line react/prop-types
const Header = ({ setOpenModal, openModal }) => {

  return (
    <>

      <header className='w-full max-w-[1540px] mx-auto  flex py-4  justify-between tracking-wider flex-col'>
        <div className='flex justify-between mx-5'>
          <div className='flex items-center'>
            <div className="campfire mr-5 ">
              <Link to='/'><svg id="campfire" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 64.5"><g id="logRight"><path className="dk" d="M44 57.7c0-3.1-1.7-5.8-4-6.5l-15.5-10-3.3-1.9-7-3.9L8 31.7c-.8-.6-1.7-.9-2.6-.9-.3 0-.6 0-.8.1-2.7.5-4.6 3.3-4.6 6.7 0 3 1.5 5.5 3.6 6.4l6 3.5s6.4 3.7 6.8 3.9c.4.2 17.6 11.1 19.6 12.3l.1.1c.7.4 1.5.7 2.4.7h.6c2.8-.5 4.9-3.3 4.9-6.8z" /><path className="lt" d="M39.2 63.5v-.6l-.2.6h-.3c-2.6 0-4.6-2.6-4.6-5.9 0-2.6 1.3-4.8 3.2-5.6l.2 3.7.5-3.9c.2 0 .5-.1.7-.1 2.6 0 4.6 2.6 4.6 5.9 0 3.1-1.8 5.6-4.1 5.9z" /><path className="dk" d="M38.7 53.4c-.2 0-.4 0-.5.1-1.6.3-2.9 2.1-2.9 4.3 0 2.4 1.5 4.3 3.4 4.3s3.4-1.9 3.4-4.3c0-2.5-1.6-4.4-3.4-4.4zm0 8.2c-1.7 0-3-1.7-3-3.9 0-1.9 1.1-3.5 2.6-3.8h.5c1.7 0 3 1.7 3 3.9s-1.5 3.8-3.1 3.8z" /><path className="dk" d="M38.7 55.8h-.2c-.7.1-1.2.9-1.2 1.9 0 1 .7 1.9 1.5 1.9s1.5-.8 1.5-1.9c-.2-1-.8-1.9-1.6-1.9zm0 3.4c-.7 0-1.2-.7-1.2-1.5 0-.7.4-1.4 1-1.5h.2c.7 0 1.2.7 1.2 1.5-.1.8-.6 1.5-1.2 1.5z" /></g><g id="logLeft"><path className="dk" d="M0 57.7c0-3.1 1.7-5.8 4-6.5l15.5-10 3.3-1.9 7-3.9 6.2-3.7c.8-.6 1.7-.9 2.6-.9.3 0 .6 0 .8.1 2.5.5 4.5 3.3 4.5 6.7 0 3-1.5 5.5-3.6 6.4l-6 3.5s-6.4 3.7-6.8 3.9c-.4 0-17.6 11-19.6 12.2l-.1.1c-.7.4-1.5.7-2.4.7h-.6C2.1 64 0 61.2 0 57.7z" /><path className="lt" d="M.7 57.7c0-3.2 2.1-5.9 4.6-5.9.2 0 .5 0 .7.1l-1.6 3.9 2.3-3.7c1.8.8 3.2 3 3.2 5.6 0 3.2-2.1 5.9-4.6 5.9H5l.4-2.7-.6 2.7C2.5 63.2.7 60.7.7 57.7z" /><path className="dk" d="M1.5 57.7c0 2.7 1.7 4.9 3.8 4.9s3.8-2.2 3.8-4.9c0-2.4-1.4-4.5-3.2-4.8-.2 0-.4-.1-.6-.1-2.1 0-3.8 2.2-3.8 4.9zm.4 0c0-2.4 1.5-4.3 3.4-4.3.2 0 .4 0 .5.1 1.6.3 2.9 2.1 2.9 4.3 0 2.4-1.5 4.3-3.4 4.3-1.9-.1-3.4-2-3.4-4.4z" /><path className="dk" d="M3.1 57.7c0 1.6 1 2.9 2.3 2.9 1.2 0 2.3-1.3 2.3-2.9 0-1.4-.8-2.6-1.9-2.8h-.4c-1.3-.1-2.3 1.2-2.3 2.8zm.1 0c0-1.5.9-2.7 2.1-2.7h.3c1 .2 1.8 1.3 1.8 2.6 0 1.5-.9 2.7-2.1 2.7-1.1.1-2.1-1.1-2.1-2.6z" /></g><g id="fire"><path id="back" d="M23.5 49.9c-3.1-.1-9.2-1.2-12.7-4.1-6-5-5.8-11.8-3.6-18.3 1.1-3.1.2-6.6-1.6-8.3.6-.6 7.3-1.3 8.8 12.6.3 3 6.6 4.1 3.4-6.8-1.3-4.6-3.8-5.9-3.9-12.7S19.2 0 19.2 0s-4.8 11.7 2.3 16c3.6 2.2 5.2-4.9-.9-6.7 0 0 3-1.4 5.9.9s5.4 8.4 4.3 15.8c-.8 5.3 7 3 4.4-1.9 0 0 3.5.6 3.1 6.6s-2.8 8-4.9 10.4c-1.4 1.6-1.6 3.4-.1 3.5 2.4.2 3.1-3.6 3.1-3.6s1.6 9.2-12.9 8.9z" /><path id="fore" d="M21.6 49.8c-3.3-.4-7.9-1.5-10.7-3.9-.5-.4-1-.9-1.4-1.3 0 0-3.9-7.4.1-16.2 1.6 10.1 14.3 8.2 12-1.7-.9-3.7-7.8-8.8-3.9-12.4-2.4 3.3 7.6 12.5 11.1 3.1 0 0 1.4.5-.2 5.1-.8 2.3.4 4.8 1.7 6 2.6 2.3 6.2.5 5.8-2.9 2.5 3.9-.2 12.1-3.6 14.6-2.4 1.8-.1 6.6-.1 6.6-7.6-3.9-1.5-12.4-7.6-14.5 3.5 2.5-1.1 13.4-1.3 14.6-2.1-.6-6.6-3.3-6.1-6.3-2.8 6.3 1.7 8.8 4.2 9.2z" /></g></svg></Link>
            </div>
            <div className="logo">
              <h1 className='lg:text-4xl sm:text-3xl text-2xl sm:tracking-tight font-semibold'>Golden kamin</h1>
              <p className='opacity-55'>Kaminlar va pechlar Moskvada</p>
            </div>
          </div>
          <div className='flex space-x-10  items-center   '>
            <div className='flex items-center space-x-3'>
              <Link to={'Kontakt'}><img className='sm:block sm:mr-10 hover:scale-125 transition-all lg:hidden w-10 rounded-full' src={locationImg} alt="#" /></Link>
              <div className='hidden sm:hidden lg:block'>
                <p>Ofis manzili:</p>
                <p>Moskva sh.Leninskiy prospekt,uy</p>
                <Link to={'Kontakt'} className='font-medium text-green-600'><u>Xaritada ko`rsatish</u></Link>
              </div>
            </div>
            <div className='flex items-center space-x-3'>
              <Link to={'Kontakt'}><img className='sm:block hover:scale-125 transition-all sm:mr-10 lg:hidden w-10' src={phoneImg} alt="#" /></Link>
              <div className='hidden sm:hidden lg:block'>
                <p className='text-opacity-55'>Biz 24/7 aloqadamiz</p>
                <p className='font-medium text-2xl'>+7 (000) 123 45 67</p>
                <Link onClick={() => {
                  setOpenModal(true)
                }} className='font-medium text-green-600'><u>Buyurtma berish</u></Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className='bg-[#5f330a]  lg:block sm:hidden hidden'>
        <ul className='w-full dropdownul lg:max-w-[1440px]  flex  justify-between mx-auto'>
          <li><Link to={'/'} className='navlink footerLink  sm:text-normal  text-white'>Asosiy</Link></li>
          <li className=' navlink2'>
            <Link to={'Okompane'} className='navlink footerLink  sm:text-normal text-white'>Kompaniya haqida </Link>
            <ul className='dropdown'>
              <li><Link to={'TolovShartlariPage'} className='navlink in'>To`lov shartlari</Link></li>
              <li><Link to={'OtzivONas'} className='navlink in'>Biz haqimizda</Link></li>
              <li><Link to={'FotoGalereya'} className='navlink in'>Fotogalereya</Link></li>
            </ul>
          </li>
          <li className=' navlink2'>
            <Link to={'UslugePage'} className='navlink footerLink  sm:text-normal text-white'>Xizmatlar</Link>
            <ul className='dropdown'>
              <li><Link className='navlink in'>O`rnatish</Link></li>
              <li><Link className='navlink in'>O`rnatish</Link></li>
              <li><Link className='navlink in'>Tamirlash</Link></li>
            </ul>
          </li>
          <li className=' navlink2'>
            <Link to={'KatalogPage'} className='navlink footerLink  sm:text-normal text-white'>Katalog page</Link>
            <ul className='dropdown'>
              <li><Link className='navlink in'>Kaminlar</Link></li>
              <li><Link className='navlink in'>Pechlar</Link></li>
              <li><Link className='navlink in'>Barbekyu</Link></li>
              <li><Link className='navlink in'>Demaxod</Link></li>
              <li><Link className='navlink in'>Biokamin</Link></li>
              <li><Link className='navlink in'>Elektrkamin</Link></li>
            </ul>
          </li>
          <li className=' navlink2'>
            <Link to={'VidOtdelkiPage'} className='navlink footerLink  sm:text-normal text-white'>O`rnatish turlari</Link>
            <ul className='dropdown'>
              <li><Link className='navlink in'>Plitkalar</Link></li>
              <li><Link className='navlink in'>Portallar</Link></li>
              <li><Link className='navlink in'>Qoplama</Link></li>
            </ul>
          </li>
          <li><Link to={'PriceList'} className='navlink footerLink  sm:text-normal text-white'>Narxlar ro`yxati</Link></li>
          <li><Link to={'NashiRaboti'} className='navlink footerLink  sm:text-normal text-white'>Bizning ishlar</Link></li>
          <li><Link to={'Aksiyalar'} className='navlink footerLink  sm:text-normal text-white'>Aksiyalar</Link></li>
          <li><Link to={'Kontakt'} className='navlink footerLink  sm:text-normal text-white'>Kontaktlar</Link></li>
        </ul>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </>
  );
};

export default Header;