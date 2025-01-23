import React from 'react'
import { Link } from 'react-router-dom'
import { otdelkiData } from '../data'

const Otdelki = () => {
    return (
        <>
            <div className='bg-[#3a1c0a] pt-16'>
                <div className='w-full max-w-[1440px] mx-auto pb-14'>
                    <h3 className='text-5xl font-bold text-white pb-10'>Tugatish turlari</h3>
                    <div className='flex justify-between'>
                        {otdelkiData.map((otdelkiData) => {
                            return (
                                <div className='xizmatlar w-full max-w-[440px] bg-white p-8' key={otdelkiData.id}>
                                    <div className="overflow-hidden">
                                        <Link><img className='rasm' src={otdelkiData.rasm} alt="#" /></Link>
                                    </div>
                                    <h4 className='text-3xl font-semibold my-5'>{otdelkiData.nomi}</h4>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Otdelki