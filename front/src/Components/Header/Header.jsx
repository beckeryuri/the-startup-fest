import React from 'react'
import "./header.css"

export default (props) => 
    <div className="header-container">
        <span onClick={props.startups}>Startups</span>
        <span onClick={props.rankings}>Rankings</span>
    </div>