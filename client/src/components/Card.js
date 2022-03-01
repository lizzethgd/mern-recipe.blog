import {useState} from 'react'
//import '../assets/css/cards.scss'
import miniAvatar from "../assets/images/avatar6.png"
import {Link} from 'react-router-dom'


/* {author, date, title, pic, description, category, nLikes, nFavs } */
const Card = ({recipe}) => {

    const [focus, setFocus] =  useState("")

    const showDescription = () =>{
        focus==="" ? setFocus("focused") : setFocus("")
      }    
      
    return (
    <div className={focus} >          
        <div className="card__head">
          <img src={recipe.photo ? recipe.photo : miniAvatar} alt="Avatar" className="w3-left w3-circle w3-margin-right" />
          <span className="w3-opacity" >{recipe.author.username} </span><i className="fa-regular fa-star w3-right litleIcon" title="Add to favs" style={{color : "orange"}}/>
          <div><small className="w3-opacity">{'date' }</small><i className="fa-solid fa-share-nodes w3-right litleIcon" title="share" style={{color : "blue"}}/></div>
        </div>
        <div className="card__image-holder" onClick={showDescription}>
          <img className="card__image" src={miniAvatar} alt={recipe.title} />
        </div>
        <div className="card__title">
           <h2>{recipe.title}</h2>
           <div className="icons">
             <i className="fa-solid fa-heart " style={{color : "red"}} title="Liked" />{recipe.nLikes}
             <i className="fa-solid fa-star " style={{color : "orange", paddingLeft: "5rem"}} title="Favorited"/>{recipe.nFavs}
           </div>
           <div className="toggle__info card__btn" onClick={showDescription}>
            <span className="leftLine"></span>
            <span className="rightLine"></span>
          </div>
        </div>
        <div className="card__flap ">
          <div className="card__description">{recipe.description}</div>
          <div className="card__actions">
              <Link className="card__btn" to={`/${recipe._id}`} >Go to recipe</Link>
          </div>
        </div>
    </div>
    )
}

export default Card



 