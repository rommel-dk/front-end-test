import React, {useEffect, useState} from 'react'
import './imageText.css';

const ImageText = () => {
  const [imageText, setImageText] = useState([])

  // Fetch Image 
  useEffect(() => {
    fetch('http://localhost:3004/imagetext')
  .then(response => response.json())
  .then(data => setImageText(data));
  
  }, []);

  console.log()
  return (
    <div className="image-text-container">
      <div className="blue-text-box">
        <h2 className="blue-text-box__title">
          {imageText.title}
          <span className="blue-text-box-text__underscore"></span>
        </h2>
        <div className="blue-text-box__bg"></div>
      </div>
      <div className="black-footer"></div>
      <div className="img-container">
      <img className="image-text__img" src={imageText.image} alt=""/>

      </div>
    </div>
  )
}

export default ImageText
