import React, {Component} from 'react';
import Api from '../../Api/Api'
import Card from '../../Components/Card/Card'
import Header from '../../Components/Header/Header'
import './startups.css'

export default class Startups extends Component{
  constructor(props){
    super(props)
    this.api = new Api();
    this.card = new Card();
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
        {startups.map(i => <Card key={i.segment_id} name={i.name} 
        image={i.imageUrl !== "https://thumb.lovemondays.com.br/image/40fa4baba2854c2fa7399bbb90debcc1/logos/4a835e/techfit.png" 
        || i.imageUrl === null ? i.imageUrl : "https://www.ferramentastenace.com.br/wp-content/uploads/2017/11/sem-foto.jpg"}
        description={i.description}
        />)
        
        }
        </div>
      </div>
    )
  }
}
