import React, {Component} from 'react';
import Api from '../Api/Api'
import Card from '../Components/Card/Card'
import Header from '../Components/Header/Header'
import './startups.css'

export default class Startups extends Component{
  constructor(props){
    super(props)
    this.api = new Api();
    this.state = {
      startups: []
    }
  }
  async componentDidMount(){
    await this.api.getStartups()
              .then((res) => this.setState({startups:res.data.data.allStartups}))
              .catch((err) => console.log(err))
  }
  render (){
    const {startups} = this.state
    return(
    <div>
      
      <div className="container-startups">
      <Header />
        {startups.map(i => <Card name={i.name} image={i.imageUrl}/>)}
      </div>
    </div>
    )
  }
}
