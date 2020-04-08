import React, { Component } from 'react'
import "./card.css"
import PopUp from '../Popup/PopUp'
import StarRating from '../StarRating/StarRating'
import firebase from '../../Api/firebase'
import Swal from 'sweetalert2'

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: false,
            pitch: 0,
            proposal: 0,
            progress: 0
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

                    <PopUp
                        close={this.closePopUp.bind(this)}
                        vote={this.setVote.bind(this)}
                        name={name}
                        image={image}
                        description={description}

                        clickOnePitch={this.setOneStarPitch.bind(this)}
                        clickTwoPitch={this.setTwoStarsPitch.bind(this)}
                        clickThreePitch={this.setThreeStarsPitch.bind(this)}
                        clickFourPitch={this.setFourStarsPitch.bind(this)}
                        clickFivePitch={this.setFiveStarsPitch.bind(this)}
                        notaPitch={this.state.pitch}

                        clickOneProposal={this.setOneStarProposal.bind(this)}
                        clickTwoProposal={this.setTwoStarsProposal.bind(this)}
                        clickThreeProposal={this.setThreeStarsProposal.bind(this)}
                        clickFourProposal={this.setFourStarsProposal.bind(this)}
                        clickFiveProposal={this.setFiveStarsProposal.bind(this)}
                        notaProposal={this.state.proposal}

                        clickOneProgress={this.setOneStarProgress.bind(this)}
                        clickTwoProgress={this.setTwoStarsProgress.bind(this)}
                        clickThreeProgress={this.setThreeStarsProgress.bind(this)}
                        clickFourProgress={this.setFourStarsProgress.bind(this)}
                        clickFiveProgress={this.setFiveStarsProgress.bind(this)}
                        notaProgress={this.state.progress}


                    />
                )
                }
            </React.Fragment>
        )
    }

    setOneStarPitch() {
        this.setState({
            pitch: 1
        })
    }

    setTwoStarsPitch() {
        this.setState({
            pitch: 2
        })
    }

    setThreeStarsPitch() {
        this.setState({
            pitch: 3
        })
    }

    setFourStarsPitch() {
        this.setState({
            pitch: 4
        })
    }

    setFiveStarsPitch() {
        this.setState({
            pitch: 5
        })
    }

    setOneStarProposal() {
        this.setState({
            proposal: 1
        })
    }

    setTwoStarsProposal() {
        this.setState({
            proposal: 2
        })
    }

    setThreeStarsProposal() {
        this.setState({
            proposal: 3
        })
    }

    setFourStarsProposal() {
        this.setState({
            proposal: 4
        })
    }

    setFiveStarsProposal() {
        this.setState({
            proposal: 5
        })
    }

    setOneStarProgress() {
        this.setState({
            progress: 1
        })
    }

    setTwoStarsProgress() {
        this.setState({
            progress: 2
        })
    }

    setThreeStarsProgress() {
        this.setState({
            progress: 3
        })
    }

    setFourStarsProgress() {
        this.setState({
            progress: 4
        })
    }

    setFiveStarsProgress() {
        this.setState({
            progress: 5
        })
    }


    setVote() {
        const { pitch, proposal, progress } = this.state
        const { name } = this.props

        const incrementPitch = firebase.firestore.FieldValue.increment(pitch)
        const incrementProposal = firebase.firestore.FieldValue.increment(proposal)
        const incrementProgress = firebase.firestore.FieldValue.increment(progress)
        const incrementVote = firebase.firestore.FieldValue.increment(1)
        const voteRef = firebase.firestore().collection('Startups').doc(name)

        voteRef.update({
            progress_rating: incrementProgress,
            proposal_rating: incrementProposal,
            pitch_rating: incrementPitch,
            votes: incrementVote
        }).then(res => console.log(res))

        this.setState({
            pitch: 0,
            proposal: 0,
            progress: 0
        })

        Swal.fire({
            icon: 'success',
            title: 'Obrigado!',
            text: 'Voto registado com sucesso!'
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
                        <div onClick={this.openPopUp.bind(this)} className="popup-button"></div>
                    </div>
                    <div className="description-container">
                        <p>{description}</p>
                    </div>
                    <div className="stars-container">
                        <StarRating name={"Apresentação / Pitch"}
                            clickOne={this.setOneStarPitch.bind(this)}
                            clickTwo={this.setTwoStarsPitch.bind(this)}
                            clickThree={this.setThreeStarsPitch.bind(this)}
                            clickFour={this.setFourStarsPitch.bind(this)}
                            clickFive={this.setFiveStarsPitch.bind(this)}
                            nota={this.state.pitch}
                        />
                        <StarRating name={"Proposta"}
                            clickOne={this.setOneStarProposal.bind(this)}
                            clickTwo={this.setTwoStarsProposal.bind(this)}
                            clickThree={this.setThreeStarsProposal.bind(this)}
                            clickFour={this.setFourStarsProposal.bind(this)}
                            clickFive={this.setFiveStarsProposal.bind(this)}
                            nota={this.state.proposal}
                        />
                        <StarRating name={"Desenvolvimento"}
                            clickOne={this.setOneStarProgress.bind(this)}
                            clickTwo={this.setTwoStarsProgress.bind(this)}
                            clickThree={this.setThreeStarsProgress.bind(this)}
                            clickFour={this.setFourStarsProgress.bind(this)}
                            clickFive={this.setFiveStarsProgress.bind(this)}
                            nota={this.state.progress}
                        />
                        <button onClick={this.setVote.bind(this)}>Votar!</button>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}


