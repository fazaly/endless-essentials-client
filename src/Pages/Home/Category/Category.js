import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {

    const categories = useLoaderData();
    console.log(categories);

    return (
        <div>
            <h3>the category have {categories.length}</h3>
        </div>
    );
};

export default Category;