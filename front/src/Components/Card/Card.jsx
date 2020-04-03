import React from 'react'
import "./card.css"

export default (props) => 
    <div className="card-container">
        <img src={props.image} alt="logo"/>
        <h1>Nome da Startup</h1>
        <h3>{props.name}</h3>
    </div>