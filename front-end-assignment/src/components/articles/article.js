 import React, {useRef, useState, useEffect} from 'react'
import {ArrowRSM} from '../arrow/arrowR';
 
 const Article = ({article}) => {
  const [state, setState] = useState({spans: 0})
  const [hover, setHover] = useState('')
  const refs = useRef();
  const imgRef = useRef();

useEffect(() =>{

  // Waiting for the image to render, then Callback
  imgRef.current.addEventListener('load', setSpans);
}, []);

const setSpans = () => {
  // Get the whole DIV height
  const height = refs.current.clientHeight;
  
  const spans = Math.ceil(height / 10);
  setState({spans});
};

   return ( 
    <div 
    ref={refs} 
    style={{ gridRowEnd: `span ${state.spans}` }} 
    className={`article`}  
    key={article.id}
    onMouseEnter={() => setHover('article-on-hover')}
    onMouseLeave={() => setHover('')}
    >
      <div className="article-header">
        <img ref={imgRef} src={article.image} alt={article['image-alt']} className="article-header__image"/> 
        <span className="article-header__project-type-date">{article.type} {article.date}</span>
      </div>
      <div className="article-body">
        <h2 className="article-body__title">{article.author}</h2>
        <p className="article-body__sub-title">{article.title}</p>
        <ArrowRSM hover={hover} />
      </div>
    </div>
   )
 }
 
 export default Article
 