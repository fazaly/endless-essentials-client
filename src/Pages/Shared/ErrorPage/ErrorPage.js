import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/login/404 Error.gif';

const ErrorPage = () => {
    return (
        <section className='flex items-center h-screen p-16'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <div className='max-w-md text-center'>
                    <img src={img} alt="" />
                    <Link to='/'>
                        <button className='btn bg-gradient-to-r from-[#F44369] to-[#D64270] text-white border-none mt-5'>Back to Homepage</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;