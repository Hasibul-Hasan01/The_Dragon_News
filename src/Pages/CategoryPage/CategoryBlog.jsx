import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../Components/NewsCard/NewsCard';

const CategoryBlog = () => {
    const { id } = useParams();
    const loadData = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([])

    console.log('category Id:', id, 'Data Load', loadData);

    useEffect(() => {
        if (id == '0') {
            setCategoryNews(loadData);
        } 
        else if (id == '1') {
            const filterNews = loadData.filter((news) => news.is_today_pick == true)
            console.log('Filter news by ID', filterNews);
            setCategoryNews(filterNews)
        } 
        else {
            const filterCategory = loadData.filter(news => news.category_id == id);
            console.log("Filter Category News", filterCategory);
            setCategoryNews(filterCategory);
        }


        // else {
        //     const filterCategory = loadData.filter(news => news.category_id == id);
        //     console.log('single category news', filterCategory);
        //     setCategoryNews(filterCategory);
        // }


    }, [id, loadData])


    return (
        <div>
            <section>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news} />)
                }
            </section>
        </div>
    );
};

export default CategoryBlog;