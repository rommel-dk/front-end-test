import React from 'react';
import LineArrow from "./LineArrow";
import "./tiles.styles.css";

function Tiles(props) {
    return (
        <div className="container">
                <img src={props.image} alt=""/>
            <div className="date-class">
                <span>
                    {props.date}
                </span>                
            </div>
            <div className="info-section">
                <div className="author-name">
                    {props.author}
                </div>
                <div className="title">
                    {props.title}
                </div>
                 <LineArrow/>
            </div>
        </div>
    )
}

export default Tiles;
