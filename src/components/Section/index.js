import React from 'react';
import './style.scss';
import data from '../../assignment-assets/data.json';
import { RightArrowCornerDown } from '../Arrows';

const Section = () => {
   return (
      <div>
         <div className='section'>
            <div className='containet'>
               {data.map((data, index) => (
                  <>
                     <div key={index} className='box'>
                        <div className='imagewide'>
                           <img
                              src={data.imagewide.image}
                              alt={data.imagewide.image}
                           />
                           <div className='box-image2'>
                              <img
                                 className='imagetext'
                                 src={data.imagetext.image}
                                 alt={data.imagetext.image}
                              />
                           </div>
                        </div>
                        {/* <div key={index} className='box-image'>
                           <img
                              className='imagetext'
                              src={data.imagetext.image}
                              alt={data.imagetext.image}
                           />
                        </div> */}
                        <div className='box-info'>
                           <h1 className='author'>
                              {data.imagetext.title}
                              <hr className='line'></hr>
                           </h1>
                           <a href={data.imagetext.href}>
                              <RightArrowCornerDown />
                           </a>

                           <div className='href_text'>
                              <h2>
                                 <a
                                    href={data.imagetext.href}
                                    alt={data.imagetext.href_text_alt}
                                 >
                                    {data.imagetext.href_text}
                                 </a>
                              </h2>
                              <p>Don't be shy to commit</p>
                           </div>
                        </div>
                        <div className='bg-blue'></div>
                     </div>
                  </>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Section;
