import React from 'react';
import useTitle from '../../../hooks/UseTitle';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import GetUpdate from '../GetUpdate/GetUpdate';
import Products from '../Porducts/Products';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner/>
            <Advertise/>
            <Products/>
            <GetUpdate/>
        </div>
    );
};

export default Home;