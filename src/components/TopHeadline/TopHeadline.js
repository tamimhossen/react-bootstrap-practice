import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setarticles] = useState([]);
    
    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=287d6a5b4c3b48a49ed26154ff6c9b67';
        fetch(url)
        .then(res => res.json())
        .then(data => setarticles(data.articles))
    })
    return (
        <div>
            <h1>Top Headlines: {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }

        </div>
    );
};

export default TopHeadline;