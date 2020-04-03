import React from 'react'
import "./popup.css"
import StarRating from '../StarRating/StarRating'

export default (props) => 
    <div className="popup-container">
        <img className="popup-img" src={"https://static.wixstatic.com/media/0adf28_eec83b33056243a9a33440a10b5d7afd.png"} alt="logo"/>
        <h1>Nome da Startup</h1>
        <h3>Teste Testando</h3>

        <StarRating name={"Apresentação"}/>
        <StarRating name={"Proposta / Pitch"}/>
        <StarRating name={"Desenvolvimento"}/>


    </div>