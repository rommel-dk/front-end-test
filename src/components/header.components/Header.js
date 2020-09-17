import React from 'react';
import Arrow from "./Arrow";
import "./header.styles.css";

function Header(props) {
    return (
        <div className="main-header">
            <div className="header-content">
                <h1 className="main-title">{props.title}</h1>
                <p>{props.description}</p>
            </div>
            <Arrow/>
        </div>
    )
}

export default Header;
