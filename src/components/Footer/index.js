import React from 'react';
import './style.scss';
import logo from '../../assignment-assets/images/logo.svg';

const Footer = () => {
   return (
      <div className='footer'>
         <div className='content'>
            <img src={logo} alt='logo footer' />
         </div>
      </div>
   );
};

export default Footer;
