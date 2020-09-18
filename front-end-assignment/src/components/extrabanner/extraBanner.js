import React, {useEffect, useState} from 'react'
import { ArrowRSM } from '../arrow/arrowR';
import {ArrowLD} from '../arrow/arrowRD';
import './extraBanner.css';


const ExtraBanner = () => {
  const [resource, setResource] = useState([])

  // Banner Data
  useEffect(() => {
    fetch('http://localhost:3004/banner')
  .then(response => response.json())
  .then(data => setResource(data));
  
  }, []);


  console.log(resource)
  return (
    <section className="banner-section">
      <div className="banner-container" >
        <img className="banner-img" src={resource.image} alt={resource['image-alt']}/>
        <div className="banner-content-wrapper">

        <div className="banner-description">
         <h3>{resource.author}, {resource.year}</h3>
          <p>{resource.description}</p>
          <ArrowRSM/>
        </div>
      
      <div className="extra-heading-container">
        <h2 className="extra-heading__subtitle">{resource.subtitle}</h2>
        <h2 className="extra-heading__title">
          {resource.author} 
          <br/>
          {resource.title}
        </h2>
        <span className="extra-heading__underline"></span>
        <ArrowLD />
      </div>
        </div>
      </div>

    </section>
  )
}

export default ExtraBanner
