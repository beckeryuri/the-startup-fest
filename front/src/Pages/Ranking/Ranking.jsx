import React, { Component } from 'react';
import './ranking.css'
import Jumbutron from '../../Components/Jumbotron/Jumbutron';
import Header from '../../Components/Header/Header'
import firebase from '../../Api/firebase'

export default class Startups extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pitch: [],
      progress: [],
      proposal: []
    }
  }

  setPitch = async () => {
    firebase.firestore().collection('Startups')
      .orderBy("pitch_rating", "desc")
      .limit(3)
      .get()
      .then((snapshot) => this.setState({ pitch: snapshot.docs.map(i => i.data()) }))
  }

  setProgress = async () => {
    firebase.firestore().collection('Startups')
      .orderBy("progress_rating", "desc")
      .limit(3)
      .get()
      .then((snapshot) => this.setState({ progress: snapshot.docs.map(i => i.data()) }))
  }

  setProposal = async () => {
    firebase.firestore().collection('Startups')
      .orderBy("proposal_rating", "desc")
      .limit(3)
      .get()
      .then((snapshot) => this.setState({ proposal: snapshot.docs.map(i => i.data()) }))
  }

  async componentDidMount() {
    await this.setPitch()
    await this.setProgress()
    await this.setProposal()
    console.log(this.state.pitch)
  }
  render() {

    const { pitch, proposal, progress } = this.state
    let rankingProp = 0
    let rankingPitch = 0
    let rankingProg = 0

    return (
      <div>
        <Header />
        <div className="ranking-container">
          <div className="column-container">
            <h1>Proposta</h1>
            {proposal.map(i => {
              rankingProp++
              return <Jumbutron
                ranking={rankingProp + "º"}
                key={i.id}
                name={i.name}
                image={i.imageUrl !== "https://thumb.lovemondays.com.br/image/40fa4baba2854c2fa7399bbb90debcc1/logos/4a835e/techfit.png"
                  || i.imageUrl === null ? i.imageUrl : "https://www.ferramentastenace.com.br/wp-content/uploads/2017/11/sem-foto.jpg"}
                nota={Math.round(i.proposal_rating / i.votes)} />
            })}
          </div>
          <div className="column-container">
            <h1>Apresentação</h1>
            {pitch.map(i => {
              rankingPitch++
              return <Jumbutron
                ranking={rankingPitch + "º"}
                key={i.id}
                name={i.name}
                image={i.imageUrl !== "https://thumb.lovemondays.com.br/image/40fa4baba2854c2fa7399bbb90debcc1/logos/4a835e/techfit.png"
                  || i.imageUrl === null ? i.imageUrl : "https://www.ferramentastenace.com.br/wp-content/uploads/2017/11/sem-foto.jpg"}
                nota={Math.round(i.pitch_rating / i.votes)} />
            })}
          </div>
          <div className="column-container">
            <h1>Desenvolvimento</h1>
            {progress.map(i => {
              rankingProg++
              return <Jumbutron
                ranking={rankingProg + "º"}
                key={i.id} name={i.name}
                image={i.imageUrl !== "https://thumb.lovemondays.com.br/image/40fa4baba2854c2fa7399bbb90debcc1/logos/4a835e/techfit.png"
                  || i.imageUrl === null ? i.imageUrl : "https://www.ferramentastenace.com.br/wp-content/uploads/2017/11/sem-foto.jpg"}
                nota={Math.round(i.progress_rating / i.votes)} />
            })}
          </div>
        </div>
      </div>
    )
  }
}
