import React from 'react';
import './style.scss';
import data from '../../assignment-assets/data.json';
import ArrowRight from '../Arrows';

const Tiles = () => {
   return (
      <div>
         <div className='containet'>
            <div className='wrapper'>
               {data.map((data, index) => (
                  <>
                     {data.tiles && data.tiles.length > 0
                        ? data.tiles.map((items) => {
                             return (
                                <div className='box'>
                                   <div key={index} className='box-image'>
                                      <img
                                         src={items.image}
                                         alt={items.image}
                                      />
                                      <p className='date'>
                                         {items.type}
                                         {items.date}
                                      </p>
                                   </div>
                                   <div className='box-info'>
                                      <h1 className='author'>{items.author}</h1>
                                      <h1>{items.title}</h1>
                                   <a href={items.href} alt={items.author_href}>
                                      <ArrowRight />
                                   </a>
                                   </div>
                                </div>
                             );
                          })
                        : 'Loading...'}
                  </>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Tiles;
