import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Spinner from '../../../Pages/Shared/Spinner/Spinner';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    // console.log('booking', booking);

    const navigate = useNavigate();

    const {model, price} = booking;

    if(navigate.state === 'loading'){
        return <Spinner/>
    }

    return (
        <div className='text-black'>
            <h3 className='text-3xl mt-10 mb-3'>Payment for {model}</h3>
            <p className='text-xl'>Please pay <strong>${price}</strong></p>
            <div className='w-96 my-12'>
            <Elements stripe={stripePromise}>
                <CheckoutForm 
                booking={booking}
                />
            </Elements>
            </div>
        </div>
    );
};

export default Payment;