import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const SingleProduct = ({product}) => {

    const {image, name} = product;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-2xl mb-10 text-center">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <Link to={`/category/${name}`}><PrimaryButton>{name}</PrimaryButton></Link>
            </div>
        </div>
    );
};

export default SingleProduct;