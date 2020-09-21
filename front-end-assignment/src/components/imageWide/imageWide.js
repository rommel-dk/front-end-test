import React, {useEffect, useState} from 'react'
import './imageWide.css';

const ImageWide = () => {
  const [image, setImage] = useState([])

  // Fetch Image 
  useEffect(() => {
    fetch('http://localhost:3004/imagewide')
  .then(response => response.json())
  .then(data => setImage(data));
  
  }, []);

  console.log()
  return (
    <div className="image-wide-container">
      <img className="image-wide" src={image.image} alt=""/>
    </div>
  )
}

export default ImageWide
