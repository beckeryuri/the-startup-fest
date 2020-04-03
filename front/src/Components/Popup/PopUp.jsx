import React from 'react'
import "./popup.css"
import StarRating from '../StarRating/StarRating'
import Close from '../../img/close-24px.svg'

export default (props) => 
    <div className="popup-container" >
        <div className="close-container">
        <img  onClick={props.onClick}className="close" src={Close} alt="close"/>
        </div>
        <img className="popup-img" src={props.image} alt="logo"/>
        <h1>{props.name}</h1>
        <p>{props.description}</p>

        <StarRating name={"Apresentação"}/>
        <StarRating name={"Proposta / Pitch"}/>
        <StarRating name={"Desenvolvimento"}/>

    </div>