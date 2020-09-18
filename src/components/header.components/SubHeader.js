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
                <h2>{props.subtitle}
                <span>
                    <LineArrow  />
                </span>
                </h2>
            </div>
            <div className="sub-description">{props.description}</div>
        </div>
    )
}

export default SubHeader;
