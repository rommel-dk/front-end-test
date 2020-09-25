import React from 'react';
import './style.scss';

const Arrows = () => {
   return (
      <div className='right-arrow'>
         <div className='arrowLine'>
            <div className='arrowTop'></div>
         </div>
      </div>
   );
};

export const ArrowRight = () => {
   return (
      <div className='right-arrow'>
         <div className='arrowLine'>
            <div className='arrowTop'></div>
         </div>
      </div>
   );
};

export const LeftArrowCornerDown = () => {
   return (
      <div className='left-arrow-corner-down'>
         <div className='arrowLine'>
            <div className='arrowHorizontal'></div>
            <div className='arrowTop'></div>
         </div>
      </div>
   );
};
export const RightArrowCornerDown = () => {
   return (
      <div className='right-arrow-corner-down'>
         <div className='arrowLine'>
            <div className='arrowHorizontal'></div>
            <div className='arrowTop'></div>
         </div>
      </div>
   );
};
export const LeftArrowDown = () => {
   return (
      <div className='left-arrow-down'>
         <div className='arrowLine'>
            <div className='arrowHorizontal'></div>
            <div className='arrowTop'></div>
         </div>
      </div>
   );
};
export default Arrows;
