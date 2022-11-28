import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Spinner from '../../Shared/Spinner/Spinner';
import SingleProduct from './SingleProduct';

const Products = () => {
    const {user} = useContext(AuthContext);

    // const [loading, setLoading] = useState(true);

    const url = 'https://b612-used-products-resale-server-side-fazaly.vercel.app/products';

    const {data: products, isLoading = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(url); 
            const data = await res.json();
            // console.log(data);
            return data;
        }
    })

    if(isLoading){
        return <Spinner/>
    }

    return (
        <div>
            <h1 className='text-gray-600 text-center lg:text-5xl sm:font-bold font-bold mb-20'>Products Category</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    products.map(product => <SingleProduct
                    key={product._id}
                    product={product}
                    ></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Products;