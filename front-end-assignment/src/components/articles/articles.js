import React, {useEffect, useState, useRef} from 'react'
import ArrowRD from '../arrow/arrowRD';
import Article from './article';
import './articles.css';
 
const Articles = () => {
  const [articles, setArticles] = useState([])
  const [el, setEl] = useState()
//    const aRef = useRef('');
// const refs = useRef();


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
