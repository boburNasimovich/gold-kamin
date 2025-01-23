import React from 'react'
import { Link } from 'react-router-dom'
import { vid } from '../data'

const Vid = () => {
    return (
        <div className='bg-[#D5CCC7] pt-16'>
            <div className='w-full max-w-[1440px] mx-auto pb-14'>
                <h3 className='text-5xl font-bold text-black pb-10'>
                    Qurilmalar turlari</h3>
                <div className='grid grid-cols-3 gap-5 mx-auto'>
                    {vid.map((vid) => {
                        return (
                            <div className='xizmatlar w-full max-w-[460px] bg-white p-8 key={vid.id}' key={vid.id}>
                                <div className="overflow-hidden">
                                    <Link><img className='rasm' src={vid.rasm} alt="#" /></Link>
                                </div>
                                <h4 className='text-3xl font-semibold my-5'>{vid.nomi}</h4>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Vid