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
          <div>
            <h1>Proposta</h1>
            <Jumbutron />
            <Jumbutron />
            <Jumbutron />
          </div>
          <div>
            <h1>Apresentação</h1>
            <Jumbutron />
            <Jumbutron />
            <Jumbutron />
          </div>
          <div>
            <h1>Desenvolvimento</h1>
            <Jumbutron />
            <Jumbutron />
            <Jumbutron />
          </div>
        </div>
      </div>
    )
  }
}
