import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { items } from '../data';

const Detail = () => {
    const { nomi } = useParams();
    const house = items.find((house) => house.nomi === nomi);
    if (!house) {
        return <p>Nomi topilmadi</p>;
    }
    return (
        <>
            <div className='w-full max-w-[1440px] mx-auto mb-12' key={house.id}>
                <h2 className='font-bold text-3xl mb-4 my-3'>{house.nomi}</h2>
                <div className='flex justify-between'>
                    <img className='max-h-[350px] max-w-[500px] mr-10' src={house.img} alt='#' />
                    <div className='flex flex-col'>
                        <p className='text-xl my-3'>{house.data}</p>
                        <span className='text-4xl font-bold tracking-wider my-3'>{house.narxi}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Detail;