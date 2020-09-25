import React from 'react';
import data from '../../assignment-assets/data.json';
import { LeftArrowDown, ArrowRight } from '../Arrows';
import './style.scss';

const Banner = () => {
   return (
      <div className='banner'>
         {data.map((items, index) => (
            <div key={index} className='container'>
               <div className='box-image'>
                  <img src={items.banner.image} alt={items.banner.image_alt} />
                  <div className='description'>
                     <h3>
                        {items.banner.author}, {items.banner.year}
                     </h3>
                     <p>{items.banner.description}</p>

                     <a href={items.banner.href}>
                        <ArrowRight />
                     </a>
                  </div>
               </div>
               <div className='banner-title'>
                  <h1 className='subtitle'>{items.banner.subtitle}</h1>
                  <h1>{items.banner.author}</h1>
                  <h1>{items.banner.title}</h1>
                  <div className='line'>
                     <a href={items.banner.href}>
                        <LeftArrowDown />
                     </a>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
};

export default Banner;
