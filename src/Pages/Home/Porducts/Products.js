import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Spinner from '../../Shared/Spinner/Spinner';
import SingleProduct from './SingleProduct';

const Products = () => {
    const {user} = useContext(AuthContext);

    // const [loading, setLoading] = useState(true);

    const url = 'http://localhost:5000/products';

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
            <h1 className='text-transparent text-center bg-clip-text bg-gradient-to-r from-[#F44369] to-[#D64270] lg:text-3xl sm:font-bold font-bold mb-10'>Products Category</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
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