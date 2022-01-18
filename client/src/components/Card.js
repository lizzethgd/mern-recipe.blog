import {useState} from 'react'
import '../assets/css/cards.scss'
import miniAvatar from "../assets/images/avatar6.png"
import {NavLink} from 'react-router-dom'

const Card = ({author, date, title, pic, description, category, nLikes, nFavs }) => {

    const [focus, setFocus] =  useState("")

    const showDescription = () =>{
        focus==="" ? setFocus("focused") : setFocus("")
      }    
    return (
    <div className={"card__ "+focus} >          
        <div className="card__head">
          <img src={miniAvatar} alt="Avatar" className="w3-left w3-circle w3-margin-right" />
          <span className="w3-opacity" >{author} </span><i className="fa-regular fa-star w3-right litleIcon" title="Add to favs" style={{color : "orange"}}/>
          <div><small className="w3-opacity">{date}</small><i className="fa-solid fa-share-nodes w3-right litleIcon" title="share" style={{color : "blue"}}/></div>
        </div>
        <div className="card__image-holder" onClick={showDescription}>
          <img className="card__image" src={pic} alt={category} />
        </div>
        <div className="card__title">
           <h2>{title}</h2>
           <div className="icons">
             <i className="fa-solid fa-heart " style={{color : "red"}} title="Liked" />{nLikes}
             <i className="fa-solid fa-star " style={{color : "orange", paddingLeft: "5rem"}} title="Favorited"/>{nFavs}
           </div>
           <div className="toggle__info card__btn" onClick={showDescription}>
            <span className="leftLine"></span>
            <span className="rightLine"></span>
          </div>
        </div>
        <div className="card__flap ">
          <div className="card__description">{description}</div>
          <div className="card__actions">
              <NavLink className="card__btn" to="/recipe">Go to recipe</NavLink>
          </div>
        </div>
    </div>
    )
}

export default Card



 