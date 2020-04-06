import React, {Component} from 'react';
import Header from '../../Components/Header/Header'
import './ranking.css'
import Jumbutron from '../../Components/Jumbotron/Jumbutron';

export default class Startups extends Component{
  constructor(props){
    super(props)
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
