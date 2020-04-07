import React, {Component} from 'react';
import Header from '../../Components/Header/Header'
import './ranking.css'
import Jumbutron from '../../Components/Jumbotron/Jumbutron';
import firebase from '../../Api/firebase'

export default class Startups extends Component{
  constructor(props){
    super(props);

    this.state = {
      pitch: [],
      progress: [],
      proposal: []
    }
  }
  
  setPitch = async () =>{
    firebase.firestore().collection('Startups')
    .orderBy("pitch_rating", "desc")
    .limit(3)
    .get()
    .then((snapshot) => this.setState({pitch: snapshot.docs.map(i => i.data())}))
  }

  setProgress = async () =>{
    firebase.firestore().collection('Startups')
    .orderBy("progress_rating", "desc")
    .limit(3)
    .get()
    .then((snapshot) => this.setState({progress: snapshot.docs.map(i => i.data())}))
  }

  setProposal = async () =>{
    firebase.firestore().collection('Startups')
    .orderBy("proposal_rating", "desc")
    .limit(3)
    .get()
    .then((snapshot) => this.setState({proposal: snapshot.docs.map(i => i.data())}))
  }

  async componentDidMount(){
    await this.setPitch()
    await this.setProgress()
    await this.setProposal()
    console.log(this.state.pitch)
  }
  render (){

    const { pitch, proposal, progress } = this.state
   
    return(
      <div>
          <div className="ranking-container">
          <div className="column-container">
            <h1>Proposta</h1>
            {proposal.map(i => 
            <Jumbutron 
            ranking={"1º"}
            key={i.id}
            name={i.name}
            image={i.imageUrl !== "https://thumb.lovemondays.com.br/image/40fa4baba2854c2fa7399bbb90debcc1/logos/4a835e/techfit.png" 
           || i.imageUrl === null ? i.imageUrl : "https://www.ferramentastenace.com.br/wp-content/uploads/2017/11/sem-foto.jpg"}
            nota={i.proposal_rating / i.votes} />)}
          </div>
          <div className="column-container">
            <h1>Apresentação</h1>
            {pitch.map(i => 
            <Jumbutron ranking={"1º"}
            key={i.id} 
            name={i.name}
            image={i.imageUrl !== "https://thumb.lovemondays.com.br/image/40fa4baba2854c2fa7399bbb90debcc1/logos/4a835e/techfit.png" 
            || i.imageUrl === null ? i.imageUrl : "https://www.ferramentastenace.com.br/wp-content/uploads/2017/11/sem-foto.jpg"}
            nota={i.pitch_rating / i.votes} />)}
          </div>
          <div className="column-container">
            <h1>Desenvolvimento</h1>
            {progress.map(i => 
            <Jumbutron ranking={"1º"}
            key={i.id} name={i.name}
            image={i.imageUrl !== "https://thumb.lovemondays.com.br/image/40fa4baba2854c2fa7399bbb90debcc1/logos/4a835e/techfit.png" 
            || i.imageUrl === null ? i.imageUrl : "https://www.ferramentastenace.com.br/wp-content/uploads/2017/11/sem-foto.jpg"}
            nota={i.progress_rating / i.votes} />)}
          </div>
        </div>
      </div>
    )
  }
}
