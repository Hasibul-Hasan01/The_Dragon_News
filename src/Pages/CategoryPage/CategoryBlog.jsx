import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryBlog = () => {
    const {id} = useParams();
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='py-5'>
            <h1>Category CategoryBlog. {id}</h1>
        </div>
    );
};

export default CategoryBlog;