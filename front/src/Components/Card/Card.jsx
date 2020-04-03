import React from 'react'
import "./card.css"
import PopUp from '../Popup/PopUp'

export default (props) => 
    <React.Fragment>
        <div className="card-container">
            <img src={props.image} alt="logo"/>
            <h1>{props.name}</h1>
        </div>
        <div>
            <PopUp className={"hidden"} />
        </div>
    </React.Fragment>


        