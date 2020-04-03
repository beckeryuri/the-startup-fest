import React, {Component} from 'react'
import "./starrating.css"
import Star from '../../img/darkStar.svg'

export default class StarRating extends Component{
    constructor(props){
        super(props)
        this.state = {
            nota: 0
        }
    }
    setOneStar(){
        this.setState({
            nota:1
        })
    }

    setTwoStars(){
        this.setState({
            nota:2
        })
    }

    setThreeStars(){
        this.setState({
            nota:3
        })
    }

    setFourStars(){
        this.setState({
            nota:4
        })
    }

    setFiveStars(){
        this.setState({
            nota:5
        })
    }

    render() {
       const { nota } = this.state
       const { name } = this.props
        return(
            <div className="starrating-container">
                    <h2>{name}</h2>
                    <div>
                    <img id="starOne" onClick={this.setOneStar.bind(this)} style={{ "opacity": `${nota > 0 ? 1 : 0.5 }` }}  className="stars" src={Star} alt={Star}/>
                    <img id="starTwo"  onClick={this.setTwoStars.bind(this)} style={{ "opacity": `${nota > 1 ? 1 : 0.5 }` }} className="stars" src={Star} alt={Star}/>
                    <img id="starThree" onClick={this.setThreeStars.bind(this)} style={{ "opacity": `${nota > 2 ? 1 : 0.5 }` }} className="stars" src={Star} alt={Star}/>
                    <img id="starFour" onClick={this.setFourStars.bind(this)}  style={{ "opacity": `${nota > 3 ? 1 : 0.5 }` }} className="stars" src={Star} alt={Star}/>
                    <img id="starFive"  onClick={this.setFiveStars.bind(this)} style={{ "opacity": `${nota > 4 ? 1 : 0.5 }` }} className="stars" src={Star} alt={Star}/>
                    </div>
            </div>
        )
    }
}

            