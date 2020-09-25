import React from 'react';
import data from '../../assignment-assets/data.json';
import { ArrowRight } from '../Arrows';
import './style.scss';

const HeroTwo = () => {
   return (
      <div className='hero-2'>
         {data.map((data, index) => (
            <div key={index} className='container'>
               <h1>{data.hero_2.title}</h1>
               <h2>
                  {data.hero_2.subtitle}
                  <a className='btn' href='#'>
                     <ArrowRight />
                  </a>
               </h2>
               <p>{data.hero_2.description}</p>
            </div>
         ))}
         <div className='line1  lines'></div>
         <div className='line2 lines'></div>
         <div className='line3 lines'></div>
      </div>
   );
};

export default HeroTwo;
