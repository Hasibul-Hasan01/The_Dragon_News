import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../Components/NewsCard/NewsCard';

const CategoryBlog = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState();

    useEffect(() => {
        const filterCategoryNews = data.filter((news) => news.category_id == id)
        setCategoryNews(filterCategoryNews);
    }, [id, data])
    return (
        <div className='py-5'>
            <h1>Category CategoryBlog. {id}</h1>
            <section>
                {
                    categoryNews.map( news => <NewsCard key={news.id} news={news} />)
                }
            </section>
        </div>
    );
};

export default CategoryBlog;