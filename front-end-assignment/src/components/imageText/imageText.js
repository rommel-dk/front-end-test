import React, {useEffect, useState} from 'react'
import ImageWide from '../imageWide/imageWide';
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
    <div className="image-showcase-container">
      <ImageWide />

      <div className="image-showcase-content-wrapper">
        <div className="blue-text-box">
          <h2 className="blue-text-box__title">
            {imageText.title}
            <span className="blue-text-box-text__underscore"></span>
          </h2>
          <div className="blue-text-box__bg">
        <div className="black-footer">asdsa</div>
          </div>
        </div>
        {/* <div className="img-container"> */}
          <img className="image-text__img" src={imageText.image} alt={imageText.image}/>
        {/* </div> */}
      </div>
    </div>
  )
}

export default ImageText
