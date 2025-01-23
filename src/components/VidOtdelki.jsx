import React from 'react'
import { Link } from 'react-router-dom'
import { otdelkiData } from '../data'


const VidOtdelki = () => {
    return (
        <>
            <div className='bg-white'>
                <div className='w-full max-w-[1440px] mx-auto pb-24'>
                    <h2 className='text-4xl font-bold mb-24 pt-24'>O'rnatish turlari</h2>
                    <div className='flex space-x-16 mb-20'>
                        {otdelkiData.map((otdelki) => {
                            return (
                                <div className='w-full max-w-[355px] text-center space-y-5 hover:text-blue-700' key={otdelki.id}>
                                    <Link className='VidOtdLink'><img className='VidOtdImg' src={otdelki.rasm} alt="#" /></Link>
                                    <p className='text-3xl font-bold'>{otdelki.nomi}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex flex-col w-[490px] space-y-5'>
                        <Link className='bg-blue-200 pl-10 py-3 flex justify-between hover:bg-blue-300 okompanelink  text-green-600 text-2xl rounded-md'>Облицовка <span className='pr-10'>→</span></Link>
                        <Link className='bg-blue-200 pl-10 py-3 flex justify-between hover:bg-blue-300 okompanelink  text-green-600 text-2xl rounded-md'>Порталы <span className='pr-10'>→</span></Link>
                        <Link className='bg-blue-200 pl-10 py-3 flex justify-between hover:bg-blue-300 okompanelink  text-green-600 text-2xl rounded-md'>Изразцы <span className='pr-10'>→</span></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VidOtdelki