import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../img/partnyor.webp'
import logo2 from '../img/partnyor2.webp'
import logo3 from '../img/partnyor3.webp'
import logo4 from '../img/partnyor4.webp'
import logo5 from '../img/partnyor5.webp'

const Partnyor = () => {
    return (
        <>
            <div className='bg-white'>
                <div className="w-full max-w-[1440px] mx-auto py-16">
                    <div className='flex items-center justify-between mb-10'>
                        <h2 className='text-5xl font-bold'>Bizning hamkorlar</h2>
                        <Link className='partnyorlink p-5 bg-lime-500 hover:bg-lime-400  rounded-sm text-white text-2xl font-semibold'>Hamkor bo'ling</Link>
                    </div>
                    <div className='flex justify-between'>
                        <Link className='partnyor hover:border-lime-700 hover:-translate-y-4'><img src={logo1} alt="#" /></Link>
                        <Link className='partnyor hover:border-lime-700 hover:-translate-y-4'><img src={logo2} alt="#" /></Link>
                        <Link className='partnyor hover:border-lime-700 hover:-translate-y-4'><img src={logo3} alt="#" /></Link>
                        <Link className='partnyor hover:border-lime-700 hover:-translate-y-4'><img src={logo4} alt="#" /></Link>
                        <Link className='partnyor hover:border-lime-700 hover:-translate-y-4'><img src={logo5} alt="#" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partnyor