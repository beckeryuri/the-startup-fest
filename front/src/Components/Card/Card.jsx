import React, { Component } from 'react'
import "./card.css"
import PopUp from '../Popup/PopUp'
import StarRating from '../StarRating/StarRating'

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = { hidden: false }
    }

    openPopUp() {
        this.setState({ hidden: true })
    }

    closePopUp() {
        this.setState({ hidden: false })
        console.log("Foi FOOOOOOOI")

        console.log(this.state.hidden)
    }

    showPopUp() {
        const { hidden } = this.state
        const { image, name, description } = this.props

        return (
            <React.Fragment>

                {hidden && (

                    <PopUp onClick={this.closePopUp.bind(this)} name={name} image={image} description={description} />
                )
                }
            </React.Fragment>
        )
    }

    render() {
        const { image, name, description } = this.props
        return (
            <React.Fragment>
                {this.showPopUp()}
                <div className="card-container">
                    <div className="logo-container">
                        <img src={image} alt="logo" />
                        <h1>{name}</h1>
                        <div onClick={this.openPopUp.bind(this)}className="popup-button"></div>
                    </div>
                    <div className="description-container">
                        <p>{description}</p>
                    </div>
                        <div className="stars-container">
                            <StarRating name={"Apresentação"} />
                            <StarRating name={"Proposta / Pitch"} />
                            <StarRating name={"Desenvolvimento"} />
                            <button>Votar!</button>
                        </div>
                </div>

            </React.Fragment>
        )
    }
}


