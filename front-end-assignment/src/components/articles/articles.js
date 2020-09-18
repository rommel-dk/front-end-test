import React, {useEffect, useState} from 'react'
import Article from './article';
import './articles.css';
 
const Articles = () => {
  const [articles, setArticles] = useState([])

 // Fetch Images and use it as fake articles
 useEffect(() => {
   fetch('http://localhost:3004/tiles')
 .then(response => response.json())
 .then(data => setArticles(data));
 
 }, []);

 const singleArticle = articles.map((article) => {     
  return (
      <Article article={article} key={article.id}/>
      
  )
});

  return (
    <div className="articles-container">
      {singleArticle}
    </div>
  )
}

export default Articles
