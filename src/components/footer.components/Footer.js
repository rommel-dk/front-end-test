import React, {useState, useEffect} from 'react';
import LineSpan from "./LineSpan";
import assignmentData from "../../assignment-assets/data.json";
import logo from "../../assignment-assets/images/logo.svg";
import "./footer.styles.css";

const imageTextData = assignmentData.imagetext;
const imageWide =assignmentData.imagewide;
// console.log(imageText)
function Footer() {
    const [imageText, setImageText] = useState([])
    const [imageWideData, setImageWideData]= useState([])
    useEffect(() => {
        setImageText(imageTextData) 
        setImageWideData(imageWide)
    }, []) 
    // console.log(imageText)
    return (
        <footer className="footer-section">
            <div className="footer-contents">
                <img className="image-imageWide" src={imageWideData.image} alt=""/>
                <div className="image-text">
                    <div className="image-description">
                        <p>{imageText.title}</p>
                        <LineSpan/>
                    </div>                    
                    <img className="image-imageText" src={imageText.image} alt=""/>
                </div>
                <div className="footer-bottom">
                    <div className="pull-request">
                        <div className="verticalLine-span">
                            <span className="linespan-vetical"></span>
                            <span className="pointer-down"></span>
                        </div>
                        <h1>{imageText['href-text']}</h1>
                        <p>{imageText['href-text-alt']}</p>
                    </div>
                    <div className="svg-logo">
                        <img src={logo} alt=""/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
