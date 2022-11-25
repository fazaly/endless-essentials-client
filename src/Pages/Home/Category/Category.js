import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryInfo from './CategoryInfo';

const Category = () => {

    const categories = useLoaderData();
    console.log(categories);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    categories.map(category => <CategoryInfo
                    key={category._id}
                    category={category}
                    ></CategoryInfo>)
                }
            </div>
        </div>
    );
};

export default Category;