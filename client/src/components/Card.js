import {useState} from 'react'
import '../assets/css/cards.scss'
import miniAvatar from "../assets/images/avatar6.png"

const Card = () => {

    const [focus, setFocus] =  useState("")
    const [likes, setLikes] =  useState("")

    const showDescription = () =>{
        focus==="" ? setFocus("focused") : setFocus("")
      }    
    return (
    <div className={"card__ "+focus} >          
        <div className="card__head">
        <img src={miniAvatar} alt="Avatar" className="w3-left w3-circle w3-margin-right" />
        <span className="w3-right w3-opacity">1 min</span>
        <h5 className="w3-opacity" >John Doe</h5>
        <small className="w3-opacity">time</small> 
        </div>
        <div className="card__image-holder" onClick={showDescription}>
          <img className="card__image" src="https://source.unsplash.com/300x225/?desert" alt="desert" /><i className="fa fa-bookmark" />
        </div>
        <div className="card__title">
           <h2>Card title </h2>
           <small ><span className="w3-opacity">{likes}</span></small>
           <div className="toggle__info card__btn" onClick={showDescription}>
            <span className="leftLine"></span>
            <span className="rightLine"></span>
          </div>
        </div>
        <div className="card__flap ">
          <div className="card__description">
            This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
          </div>
          <div className="card__actions">
              <button className="card__btn">Read more</button>
          </div>
        </div>
    </div>
    )
}

export default Card
