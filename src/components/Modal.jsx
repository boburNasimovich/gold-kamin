import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ setOpenModal }) => {
    return createPortal(
        (
            <div className="fixed flex justify-center items-center w-full h-full backdrop-blur-sm bg-black/50 left-0 top-0 z-[9999]">
                <div onClick={() => setOpenModal(false)} className='relative w-full h-full'></div>
                <div className="w-full overflow-auto h-[calc(100vh-50px)] max-w-[450px] absolute p-5 rounded-sm bg-[#57392a] py-10">
                    <div className='space-y-3 w-full max-w-[350px] mx-auto relative'>
                        <button onClick={() => setOpenModal(false)} className="px-5 text-red-600 text-4xl font-medium absolute -right-10 -top-10">×</button>
                        <h2 className='text-3xl text-white font-bold'>Hisoblash uchun ariza</h2>
                        <p className='opacity-55 text-white'>Menejerimiz sizga tez orada qo'ng'iroq qiladi</p>
                        <input type="tel" className='h-12 w-72 input-tel' placeholder='+7(___)___ __ __' pattern="[+]7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}" />
                        <textarea className='w-72 h-12 input-tel placeholder:py-2' placeholder='Sharh qoldirish'></textarea>
                        <h2 className='text-white font-bold text-xl'>Radio guruh</h2>
                        <div className='flex flex-col space-y-3 items-start'>
                            <label htmlFor="input" className='flex'>
                                <input type="radio" />
                                <p className='font-bold ml-3 text-white'>Variant 1</p>
                            </label>
                            <label htmlFor="input" className='flex'>
                                <input type="radio" />
                                <p className='font-bold ml-3 text-white'>Variant 2</p>
                            </label>
                            <label htmlFor="input" className='flex'>
                                <input type="radio" />
                                <p className='font-bold ml-3 text-white'>Variant 3</p>
                            </label>
                            <h2 className='font-bold text-xl text-white'>Sana 'Dan' va 'Gacha'</h2>
                            <div className='space-x-6'>
                                <input type="date" className='h-12 w-35' />
                                <input type="date" className='h-12 w-35' />
                            </div>
                            <h2 className='font-bold text-xl text-white'>Sana</h2>
                            <input type="date" className='h-12 w-72' />
                            <h2 className='font-bold text-xl text-white'>Ochiladigan ro'yxat:</h2>
                            <select className='h-12 w-72'>
                                <option value="qiymat1">Variant 1</option>
                                <option value="qiymat2">Variant 2</option>
                                <option value="qiymat3">Variant 3</option>
                            </select>
                            <h2 className='font-bold text-xl text-white'>Galochkalar ro'yxati</h2>
                            <label className='flex space-x-3 font-medium text-white'>
                                <input type="checkbox" />
                                <p>Variant 1</p>
                            </label>
                            <label className='flex space-x-3 font-medium text-white'>
                                <input type="checkbox" />
                                <p>Variant 2</p>
                            </label>
                            <label className='flex space-x-3 font-medium text-white'>
                                <input type="checkbox" />
                                <p>Variant 3</p>
                            </label>
                            <h2 className='font-bold text-xl text-white'>Fayl yuklash</h2>
                            <input type="file" />
                            <input type="submit" className='w-72 h-12 bg-lime-500 rounded-sm text-white font-semibold text-2xl' />
                        </div>
                    </div>
                </div>
            </div>
        ),
        document.body
    );
};

export default Modal;
