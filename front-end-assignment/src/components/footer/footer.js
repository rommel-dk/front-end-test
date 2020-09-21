import './footer.css'
import React, {useEffect, useState} from 'react'
import logo from '../../assets/images/myLogo.svg'


const Footer = () => {
  const [footerData, setFooterData] = useState([])

    // Fetch Footer Data 
    useEffect(() => {
      fetch('http://localhost:3004/imagetext')
    .then(response => response.json())
    .then(data => setFooterData(data));
    
    }, []);

    console.log(footerData)
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer__text">
          <h2>
            {footerData['href-text']}
            
          </h2>
          <p>
            {footerData['href-text-alt']} 
          </p>
        </div>
        <img src={logo} alt=""/>
      </div>
    </footer>
  )
}

export default Footer
