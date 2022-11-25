import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Spinner from '../../Pages/Shared/Spinner/Spinner';

const MyOrders = () => {

    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/myorder?email=${user?.email}`;

    const {data: order, isLoading = [] } = useQuery({
        queryKey: ['order'],
        queryFn: async () => {
            const res = await fetch(url); 
            const data = await res.json();
            // console.log(data);
            return data;
        }
    });

    if(isLoading){
        return <Spinner/>
    }

    return (
        <div>
            <div>
                <h3 className='text-3xl text-black mt-10 mb-6'>My Orders</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table sm:w-1/4 lg:w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Avatar</th>
                        <th>Title</th>
                        <th>Address</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody className='text-black'>
                        {
                            order &&
                            order.map((booking, i) => <tr key={booking._id}>
                                <th>{i+1}</th>
                                <td>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={booking.image} alt='' />
                                    </div>
                                </div>
                                </td>
                                <td>{booking.model}</td>
                                <td>{booking.address}</td>
                                <td>{booking.price}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid && <Link
                                        to={`/dashboard/payment/${booking._id}`}
                                        >
                                            <button className='btn btn-primary btn-sm'>Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span
                                        className=' text-green-500'
                                        >Paid</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;