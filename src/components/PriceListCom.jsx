import React from 'react'
import { Link } from 'react-router-dom'
import { priceData } from '../data'


const PriceListCom = () => {
    return (
        <>
            <div className='w-full max-w-[1440px] mx-auto pb-24'>
                <h2 className='text-4xl font-bold mb-24 pt-24'>Narxlar ro'yxati</h2>
                <div className='flex space-x-16 mb-20'>
                    {priceData.map((price) => {
                        return (
                            <div className='w-full max-w-[355px] space-y-5' key={price.id}>
                                <div className='space-y-5'>
                                    <Link className='VidOtdLink'><img className='VidOtdImg' src={price.rasm} alt="#" /></Link>
                                    <p className='text-3xl font-bold'>{price.xona}</p>
                                    <p className='text-2xl'>{price.tavsif}</p>
                                    <p className='text-2xl opacity-60'><span className='mr-2'>•</span>{price.turi}</p>
                                    <p className='text-2xl pb-20 opacity-60'><span className='mr-2'>•</span>{price.hajmi}</p>
                                    <p className='text-3xl font-bold'>{price.narxi}</p>
                                    <span className='text-6xl font-bold'>{price.rubl}</span>
                                    <Link className='bg-blue-600 text-center py-3 block hover:opacity-85 hover:text-white okompanelink  text-green-600 text-2xl rounded-md'>Buyurtma berish</Link>
                                    <Link className='bg-blue-200 text-center py-3 block hover:bg-blue-300 okompanelink  text-green-600 text-2xl rounded-md'>Batafsil</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default PriceListCom