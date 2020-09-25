import React from 'react';
import datajson from '../../assignment-assets/data.json';
import { LeftArrowCornerDown } from '../Arrows';
import './style.scss';

const HeroOne = () => {
   return (
      <div className='hero-1'>
         {datajson.map((data, index) => (
            <div key={index} className='container'>
               <h1>{data.hero_1.title}</h1>
               <p>{data.hero_1.description}</p>
               <a href='#'>
                  <LeftArrowCornerDown />
               </a>
            </div>
         ))}
         <div className='line1  lines'></div>
         <div className='line2 lines'></div>
         <div className='line3 lines'></div>
      </div>
   );
};

export default HeroOne;
