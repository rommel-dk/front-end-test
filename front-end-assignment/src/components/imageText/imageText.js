import React, {useEffect, useState} from 'react'
import ArrowBox from '../arrow/arrowBox';
import ArrowRD from '../arrow/arrowRD';
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

      <div className="image-showcase-content-wrapper">
        <div className="blue-text-box">
          <h2 className="blue-text-box__title">
            {imageText.title}
            <span className="blue-text-box-text__underscore"></span>
          </h2>
            <span className="blue-text-box-arrow-down">
              {/* <span className="blue-text-box-arrow-down__line"></span> */}
              <ArrowRD />
              <ArrowBox />
            </span>
          <div className="blue-text-box__bg">
        <div className="black-footer"></div>
          </div>
        </div>
        {/* <div className="img-container"> */}
      <ImageWide />

          <img className="image-text__img" src={imageText.image} alt={imageText.image}/>
        {/* </div> */}
      </div>
    </div>
  )
}

export default ImageText
