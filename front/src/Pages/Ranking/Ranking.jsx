import React, {Component} from 'react';
import Header from '../../Components/Header/Header'
import './ranking.css'
import Jumbutron from '../../Components/Jumbotron/Jumbutron';
import firebase from '../../Api/firebase'

export default class Startups extends Component{
  constructor(props){
    super(props);

    this.state = {
      startups:null,
      setStartups:null
    }
  }
  
  fetchData = async () =>{
    firebase.firestore().collection('Startups')
    .orderBy("pitch_rating", "desc")
    .limit(3)
    .get()
    .then((snapshot) => snapshot.docs.forEach(doc => console.log(doc.data())))

  }

  componentDidMount(){
    this.fetchData()
  }
  render (){
   
    return(
      <div>
          <Header />
          <div className="ranking-container">
          <div className="column-container">
            <h1>Proposta</h1>
            <Jumbutron ranking={"1º"} nota={2.5} name={"Hellfire Games"}/>
            <Jumbutron ranking={"2º"} />
            <Jumbutron ranking={"3º"} />
          </div>
          <div className="column-container">
            <h1>Apresentação</h1>
            <Jumbutron ranking={"1º"} nota={2.5} name={"Testando"}/>
            <Jumbutron ranking={"2º"} />
            <Jumbutron ranking={"3º"} />
          </div>
          <div className="column-container">
            <h1>Desenvolvimento</h1>
            <Jumbutron ranking={"1º"} nota={2.5}/>
            <Jumbutron ranking={"2º"} />
            <Jumbutron ranking={"3º"} />
          </div>
        </div>
      </div>
    )
  }
}
