import React from 'react'
import { aksiyalar } from '../data'
import { Link } from 'react-router-dom'

const AksiyalarCom = () => {
    return (
        <>
            <div className='w-full max-w-[1440px] mx-auto pb-24'>
                <h2 className='text-4xl font-bold mb-24 pt-24'>Aksiyalar</h2>
                <div className='flex space-x-16 mb-20'>
                    {aksiyalar.map((aksiya) => {
                        return (
                            <div>
                                <div key={aksiya.id} className='overflow-hidden space-y-3'>
                                    <Link><img className='w-full max-w-[460px] h-[320px] aksiya' src={aksiya.rasm} alt="#" /></Link>
                                    <span className='opacity-55 tracking-wider inline-block'>{aksiya.sana}</span>
                                    <h2 className='font-bold text-3xl'>{aksiya.nomi}</h2>
                                    <p className='text-xl'>{aksiya.matni}</p>
                                    <Link className=''>tafsilotlar</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='flex flex-col w-[490px] space-y-5'>
                </div>
            </div>
        </>
    )
}

export default AksiyalarCom