import React from 'react'
import "./jumbutron.css"
import StarRating from '../StarRating/StarRating'

export default (props) => 
        <div className="jumbutron-container" >
            <h1>{props.ranking}</h1>
             <img className="jumbutron-logo" src={props.image} alt="logo"/>
             <div>
                 <StarRating nota={props.nota} name={props.name}/>
                <h3>{props.nota}</h3>
             </div>
        </div>