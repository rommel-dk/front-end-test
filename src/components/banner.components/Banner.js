import React, {useState, useEffect} from 'react';
import assignmentData from "../../assignment-assets/data.json";
import LineArrow from "../tiles.comonents/LineArrow";
import ArrowRev from "./ArrowRev";
import "./banner.styles.css";

const data = assignmentData.banner;
console.log(data)
function Banner() {
    const [assignmentDataState, setAssignmentDataState] = useState([])
    useEffect(() => {
        setAssignmentDataState(data)
    }, []) 
      
    console.log(assignmentDataState)
    return (
        <div className="banner-section">
            <div className="banner-author-section">
                <img className="banner-image" src={assignmentDataState.image} alt=""/>
                <div className="title-subtitle-section">
                    <div className="banner-contents">
                        <h3> {assignmentDataState.author}, {assignmentDataState.year}</h3>
                        <p>{assignmentDataState.description}</p>
                        <LineArrow/>  
                    </div>
                    <div className="banner-extra-subtitle">
                        <h1 className="extra">{assignmentDataState.subtitle}</h1> 
                        <h1>{assignmentDataState.author}</h1>
                        <h1>{assignmentDataState.title}</h1>
                        <ArrowRev/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
