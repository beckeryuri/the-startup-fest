import React from 'react'
import "./card.css"
import PopUp from '../Popup/PopUp'

export default (props) => 
    <React.Fragment>
        <div className="card-container">
            <img src={props.image} alt="logo"/>
            <h1>Nome da Startup</h1>
            <h3>{props.name}</h3>
        </div>
        <div>
            <PopUp className={"hidden"} />
        </div>
    </React.Fragment>


        