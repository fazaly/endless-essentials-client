import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/UseTitle';
import Spinner from '../../../Pages/Shared/Spinner/Spinner';


const MyProducts = () => {
    useTitle('My Product');
    const { user } = useContext(AuthContext);

    const { data: products, isLoading, refetch = [] } = useQuery({
        queryKey: ['myProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://b612-used-products-resale-server-side-fazaly.vercel.app/myProducts?email=${user?.email}`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

    const handleAdvertise = ({productName = '', price = 0, image = '' }) => {
        const confirm = window.confirm('Are you sure you want to confirm Advertise');
        const data = new Date();
        if(confirm){
            fetch('https://b612-used-products-resale-server-side-fazaly.vercel.app/advertise', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                productName,
                price,
                image,
                time: data.getTime(),
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Advertisement posted successfully')
            })
        }
    }

    // Products info from client UI
    const handleDeleteProduct = (id) => {
        // console.log(advertiseId);
        fetch(`https://b612-used-products-resale-server-side-fazaly.vercel.app/myProducts/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then( data => {
            console.log(data);
            if(data.deletedCount > 0 ){
                refetch();
                toast.success('Product deleted successfully')
            }
        })
    }

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div>
            <div>
                <h3 className='text-3xl text-black mt-10 mb-6'>My Products</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table sm:w-1/4 lg:w-full">
                    <thead>
                        <tr><th>Sl. No</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Advertisement</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-black'>
                        {
                            products &&
                            products.sort((a, b) => b.time - a.time).map((addProduct, i) => <tr key={addProduct._id}>
                                <th>{i + 1}</th>
                                <td>{addProduct.productName}</td>
                                <td>{addProduct.price}</td>
                                <td>Status Not found</td>
                                <td><button onClick={() => handleAdvertise((addProduct))} className='btn btn-sm border-none mt-2 bg-gradient-to-r from-[#093028] to-[#237A57]'>Advertisement</button></td>
                                <td><label onClick={() => handleDeleteProduct(addProduct._id)}  className='btn btn-sm border-none mt-2 bg-gradient-to-r from-[#e52d27] to-[#b31217]'>Delete</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;