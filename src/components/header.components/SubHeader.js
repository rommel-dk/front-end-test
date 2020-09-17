import React from 'react';
import LineArrow from "../tiles.comonents/LineArrow";
import "./header.styles.css";

function SubHeader(props) {

    return (
        <div className="main-header sub-header">
            <div className="subheader-content">
                <h1>{props.title}</h1>
            </div>    
            <div className="sub-title">
                <div className="sub">
                    <h2>{props.subtitle}</h2>
                </div>
                <div>
                    <LineArrow className="hello"/>
                </div>
            </div>
            <div>{props.description}</div>
        </div>
    )
}

export default SubHeader;
