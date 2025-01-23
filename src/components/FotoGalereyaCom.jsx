import React from 'react'
import nature from '../img/nature.webp'
import nature2 from '../img/nature2.webp'
import nature3 from '../img/nature3.webp'

const FotoGalereyaCom = () => {
    return (
        <>
            <div className='w-full max-w-[1440px] mx-auto py-12 space-y-10'>
                <h1 className='text-4xl font-bold'>Fotogalereya</h1>
                <div className='flex justify-between'>
                    <img className='w-[460px]' src={nature} alt="nature" />
                    <img className='w-[460px]' src={nature2} alt="nature" />
                    <img className='w-[460px]' src={nature3} alt="nature" />
                </div>
            </div>
        </>
    )
}

export default FotoGalereyaCom