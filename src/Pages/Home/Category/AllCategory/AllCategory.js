import React from 'react';
import { useQuery } from '@tanstack/react-query';
import CategoryInfo from '../CategoryInfo';
import useTitle from '../../../../hooks/UseTitle';

const AllCategory = () => {
    useTitle('Category');

    const { data: categories = [] } = useQuery({
        queryKey: ['allCategory'],
        queryFn: async () => {
            const res = await fetch('https://b612-used-products-resale-server-side-fazaly.vercel.app/allCategory')
            const data = await res.json()
            return data;
        }
    })

    return (
        <div>
            <h1 className='text-gray-600 text-center lg:text-5xl sm:font-bold font-bold mt-10'>All Category</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'>
                {
                    categories.map(category => <CategoryInfo
                        key={category._id}
                        category={category}
                    ></CategoryInfo>)
                }
            </div>
        </div>
    );
};

export default AllCategory;