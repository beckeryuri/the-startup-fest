import React from 'react'
import "./popup.css"
import StarRating from '../StarRating/StarRating'
import Close from '../../img/close-24px.svg'

export default (props) => 
    <div className="popup-container" >
        <div className="close-container">
        <img  onClick={props.close}className="close" src={Close} alt="close"/>
        </div>
        <img className="popup-img" src={props.image} alt="logo"/>
        <h1>{props.name}</h1>
        <p>{props.description}</p>

        <StarRating name={"Apresentação / Pitch"} 
        clickOne={props.clickOnePitch}
        clickTwo={props.clickTwoPitch}
        clickThree={props.clickThreePitch}
        clickFour={props.clickFourPitch}
        clickFive={props.clickFivePitch}
        nota={props.notaPitch}
        />
        <StarRating name={"Proposta"} 
        clickOne={props.clickOneProposal}
        clickTwo={props.clickTwoProposal}
        clickThree={props.clickThreeProposal}
        clickFour={props.clickFourProposal}
        clickFive={props.clickFiveProposal}
        nota={props.notaProposal}
        />
        <StarRating name={"Desenvolvimento"} 
        clickOne={props.clickOneProgress}
        clickTwo={props.clickTwoProgress}
        clickThree={props.clickThreeProgress}
        clickFour={props.clickFourProgress}
        clickFive={props.clickFiveProgress}
        nota={props.notaProgress}
        />

        <button onClick={props.vote} >Votar!</button>

    </div>