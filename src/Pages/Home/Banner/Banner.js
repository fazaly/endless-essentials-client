import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/banner/Product teardown.gif';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 ml-[70px] mr-[70px]">
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-3 mx-auto sm:py-12  lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none text-gray-600 sm:text-6xl">Stay Connected Everywhere You Go!
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Buy and sell means an agreement between the buyer and the seller whereby the seller has the duty to transfer the ownership of property to the buyer and the buyer pays the price of the property to the seller.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link to=''><button className='btn btn-outline hover:border-none hover:bg-gradient-to-r from-[#F44369] to-[#D64270]'>Sell your Product</button></Link>
                        <Link to=''><PrimaryButton>Buy Now</PrimaryButton></Link>
                    </div>
                </div>
                <div className="text-center hidden md:block lg:block">
                    <img src={img} alt="" className=" md:max-w-lg lg:max-w-lg rounded-lg " />
                </div>
            </div>
        </section>
    );
};

export default Banner;