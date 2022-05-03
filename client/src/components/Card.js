import {useState, useContext, useEffect, useCallback} from 'react'
//import '../assets/css/cards.scss'
import miniAvatar from "../assets/images/avatar6.png"
import {getRecipe} from '../services/RecipeService';
import {addLike, deleteLike} from '../services/LikeService';
import {addFavorite, deleteFavorite} from '../services/FavoriteService';
import {Link, useNavigate} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext';

const Card = ({dispatch}) => {

    const {user, isAuthenticated} = useContext(AuthContext)
    
    const [recipe, setRecipe] = useState(dispatch) 

    const [open, setOpen] =  useState("")

    const [heart, setHeart] = useState('regular')

    const [bookmark, setBookmark] = useState('regular')

    const history = useNavigate()

    const showDescription = () =>{
        open==="" ? setOpen("opened") : setOpen("")
    } 

  //const { title, description, serves, cookTime, photo, author, likes, favorites, createdAt } = recipe
  const initCard = useCallback(async() => {
    const dataLikes = recipe.likes
    const dataFavorites = recipe.favorites
    if (isAuthenticated){
      setHeart(dataLikes.includes(user._id) ? 'solid' : 'regular')
      setBookmark(dataFavorites.includes(user._id) ? 'solid' : 'regular')
    }  
  }, [user, isAuthenticated, recipe]); 

 useEffect(() => {
       try{  
         initCard() 
       }catch(err){
         console.log('error in the card component: '+err) 
       }
 }, [initCard]) 

 const reInitCard = async () => {
  const data = await getRecipe(dispatch._id)
  setRecipe(data);
} 
      
  const handleLike = e => {
      e.preventDefault()
      if (isAuthenticated)  {
        const hasUserLike = recipe.likes.includes(user._id)
        console.log(hasUserLike)
        if (hasUserLike){
          deleteLike(recipe._id, user._id)
        }else{
          addLike(recipe._id, user._id)
        }
        reInitCard()
      } else history('/login')
  }

  const handleFavorite = e => {
      e.preventDefault()
      if (isAuthenticated)  {
        const hasUserFav = recipe.favorites.includes(user._id)
        console.log(hasUserFav)
        if (hasUserFav){
          deleteFavorite(recipe._id, user._id)
        }else{
          addFavorite(recipe._id, user._id)
        }
        reInitCard()
      } else history('/login')
  }   

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



 