import React, { Component } from 'react'
import "./card.css"
import PopUp from '../Popup/PopUp'
import StarRating from '../StarRating/StarRating'

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            hidden: false,
            apresentacao:0,
            proposta: 0,
            desenvolvimento: 0
         }
    }

    openPopUp() {
        this.setState({ hidden: true })
    }

    closePopUp() {
        this.setState({ hidden: false })
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

    setOneStarApresentacao(){
        this.setState({
            apresentacao:1
        })
    }

    setTwoStarsApresentacao(){
        this.setState({
            apresentacao:2
        })
    }

    setThreeStarsApresentacao(){
        this.setState({
            apresentacao:3
        })
    }

    setFourStarsApresentacao(){
        this.setState({
            apresentacao:4
        })
    }

    setFiveStarsApresentacao(){
        this.setState({
            apresentacao:5
        })
    }

    setOneStarProposta(){
        this.setState({
            proposta:1
        })
    }

    setTwoStarsProposta(){
        this.setState({
            proposta:2
        })
    }

    setThreeStarsProposta(){
        this.setState({
            proposta:3
        })
    }

    setFourStarsProposta(){
        this.setState({
            proposta:4
        })
    }

    setFiveStarsProposta(){
        this.setState({
            proposta:5
        })
    }

    setOneStarDesenvolvimento(){
        this.setState({
            desenvolvimento:1
        })
    }

    setTwoStarsDesenvolvimento(){
        this.setState({
            desenvolvimento:2
        })
    }

    setThreeStarsDesenvolvimento(){
        this.setState({
            desenvolvimento:3
        })
    }

    setFourStarsDesenvolvimento(){
        this.setState({
            desenvolvimento:4
        })
    }

    setFiveStarsDesenvolvimento(){
        this.setState({
            desenvolvimento:5
        })
    }

    setVote(){
        this.setState({
            apresentacao:0,
            proposta: 0,
            desenvolvimento: 0
        })
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
                            <StarRating name={"Apresentação"} 
                            clickOne={this.setOneStarApresentacao.bind(this)}
                            clickTwo={this.setTwoStarsApresentacao.bind(this)}
                            clickThree={this.setThreeStarsApresentacao.bind(this)}
                            clickFour={this.setFourStarsApresentacao.bind(this)}
                            clickFive={this.setFiveStarsApresentacao.bind(this)}
                            nota={this.state.apresentacao}
                            />
                            <StarRating name={"Proposta / Pitch"} 
                            clickOne={this.setOneStarProposta.bind(this)}
                            clickTwo={this.setTwoStarsProposta.bind(this)}
                            clickThree={this.setThreeStarsProposta.bind(this)}
                            clickFour={this.setFourStarsProposta.bind(this)}
                            clickFive={this.setFiveStarsProposta.bind(this)}
                            nota={this.state.proposta}
                            />
                            <StarRating name={"Desenvolvimento"} 
                            clickOne={this.setOneStarDesenvolvimento.bind(this)}
                            clickTwo={this.setTwoStarsDesenvolvimento.bind(this)}
                            clickThree={this.setThreeStarsDesenvolvimento.bind(this)}
                            clickFour={this.setFourStarsDesenvolvimento.bind(this)}
                            clickFive={this.setFiveStarsDesenvolvimento.bind(this)}
                            nota={this.state.desenvolvimento}
                            />
                            <button onClick={this.setVote.bind(this)}>Votar!</button>
                        </div>
                </div>

            </React.Fragment>
        )
    }
}


