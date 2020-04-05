import React from 'react'
import "./starrating.css"
import Star from '../../img/darkStar.svg'

export default (props) => {

        return(
            <div className="starrating-container">
                    <h2>{props.name}</h2>
                    <div>
                    <img id="starOne" onClick={props.clickOne} style={{ "opacity": `${props.nota > 0 ? 1 : 0.5 }` }}  className="stars" src={Star} alt={Star}/>
                    <img id="starTwo"  onClick={props.clickTwo} style={{ "opacity": `${props.nota  > 1 ? 1 : 0.5 }` }} className="stars" src={Star} alt={Star}/>
                    <img id="starThree" onClick={props.clickThree} style={{ "opacity": `${props.nota  > 2 ? 1 : 0.5 }` }} className="stars" src={Star} alt={Star}/>
                    <img id="starFour" onClick={props.clickFour}  style={{ "opacity": `${props.nota  > 3 ? 1 : 0.5 }` }} className="stars" src={Star} alt={Star}/>
                    <img id="starFive"  onClick={props.clickFive} style={{ "opacity": `${props.nota  > 4 ? 1 : 0.5 }` }} className="stars" src={Star} alt={Star}/>
                    </div>
            </div>
        )
    }
            