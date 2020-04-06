import React from 'react'
import "./jumbutron.css"
import StarRating from '../StarRating/StarRating'

export default (props) => 
        <div className="jumbutron-container" >
            <h1>{props.ranking}</h1>
             <img className="jumbutron-logo" src="https://static.wixstatic.com/media/0adf28_eec83b33056243a9a33440a10b5d7afd.png" alt="logo"/>
             <div>
                 <StarRating nota={props.nota} name={props.name}/>
                <h3>{props.nota}</h3>
             </div>
        </div>