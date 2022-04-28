import {useState, useContext, useEffect} from 'react'
//import '../assets/css/cards.scss'
import miniAvatar from "../assets/images/avatar6.png"
import {Link, useNavigate} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext';
import {addLike, deleteLike} from '../services/LikeService';
import {addFavorite, deleteFavorite} from '../services/FavoriteService';

/* {author, date, title, pic, description, category, nLikes, nFavs } */
const Card = ({recipe}) => {


    const {user, isAuthenticated} = useContext(AuthContext)

    const [open, setOpen] =  useState("")

    const [heart, setHeart] = useState('regular')

    const [bookmark, setBookmark] = useState('regular')

    const history = useNavigate()

    const showDescription = () =>{
        open==="" ? setOpen("opened") : setOpen("")
    } 

  useEffect(() => {
      try{  
        if (isAuthenticated){
        setHeart(recipe.likes.includes(user._id) ? 'solid' : 'regular')
        setBookmark(recipe.favorites.includes(user._id) ? 'solid' : 'regular')
      }
      }catch(err){
        console.log('error in the card component: '+err) 
      }
}, []) 
      
    const handleLike = e => {
        e.preventDefault()
        if (isAuthenticated)  {
          const hasLike = recipe.likes.includes(user._id)
          console.log(hasLike)
          if (hasLike){
            deleteLike(recipe._id, user._id)
          }else{
            addLike(recipe._id, user._id)
          }
          history(0)
        } else history('/login')
    }
  
    const handleFavorite = e => {
        e.preventDefault()
        if (isAuthenticated)  {
          const hasFavorite = recipe.favorites.includes(user._id)
          console.log(hasFavorite)
          if (hasFavorite){
            deleteFavorite(recipe._id, user._id)
          }else{
            addFavorite(recipe._id, user._id)
          }
          history(0)
        } else history('/login')
    }   
      
    console.log(recipe._id)
    return (
    <div className={open} >          
        <div className="card__head">
          <div className="head__left">
            <img src={recipe.author.photo ? recipe.author.photo : miniAvatar} alt="Avatar" className="w3-circle" />
            <span className="w3-opacity" > @{recipe.author.username} </span>
          </div>
          <div className="head__right" >
             <Link className="w3-hover-text-deep-orange" style={{color : "blue"}} to="/share"><i className="fa-solid fa-share-nodes" title="Share"  /></Link>
        </div>
        </div>
        <div className="card__image" onClick={showDescription}>
          <img src={recipe.photo ? recipe.photo : miniAvatar} alt={recipe.title} />
        </div>
        <div className="card__title">
           <h2>{recipe.title}</h2>
           <div className="icons">
             <i className={`fa-${heart} fa-heart`} style={{color : "red", cursor: "pointer"}} title="Liked" onClick={handleLike}/>{recipe.likes.length > 0 ? recipe.likes.length : ''}
             <i className={`fa-${bookmark} fa-bookmark`} style={{color : "orange", paddingLeft: "5rem", cursor: "pointer"}} title="Favorited" onClick={handleFavorite}/>{recipe.favorites.length > 0 ? recipe.favorites.length : ''}
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



 