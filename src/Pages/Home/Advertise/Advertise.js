import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Advertise = () => {

    const { data: advertises = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('https://b612-used-products-resale-server-side-fazaly.vercel.app/advertise')
            const data = await res.json()
            return data
        }
    })

    return (
        <div className='mb-32'>
            <h1 className='text-gray-600 text-center lg:text-5xl sm:font-bold font-bold mb-20'>Advertisement Items</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    advertises.map(adv =>
                        <div key={adv._id} className="card w-96 bg-base-100 shadow-2xl">
                            <figure className="px-10 pt-10">
                                <img src={adv.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-gray-700">{adv.productName}</h2>
                                <p className='font-semibold'>Price: <span className='text-black text-[18px] font-bold'>${adv.price}</span></p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Advertise;