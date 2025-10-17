import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../Components/NewsCard/NewsCard';

const CategoryBlog = () => {
    const { id } = useParams();
    const loadData = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([])

    console.log('category Id:', id, 'Data Load', loadData );

    useEffect( () => {
        const filterCategory = loadData.filter( news => news.category_id == id);
        // console.log('single category news', filterCategory);
        setCategoryNews(filterCategory);
    }, [id, loadData])


    return (
        <div>
            <h1>News Id {id}</h1>
            <section>
                {
                    categoryNews.map( news => <NewsCard key={news.id} news={news} />)
                }
            </section>
        </div>
    );
};

export default CategoryBlog;