import {useState, useContext, useEffect, useCallback} from 'react'
import miniAvatar from "../assets/images/blankAvatar.jpg"
import blankRecipe from "../assets/images/blankRecipe.jpg"
import {getRecipeById} from '../services/RecipeService';
import {addLike, deleteLike} from '../services/LikeService';
import {addFavorite, deleteFavorite} from '../services/FavoriteService';
import {Link, useNavigate} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext';

const Card = ({id, toggleModal}) => {

    const {user, isAuthenticated} = useContext(AuthContext)
    
    const [recipe, setRecipe] = useState({
      title: '',
      description: '',
      serves: '',
      cookTime: [],
      photo: '',
      ingredients: [],
      steps: [],
      author: {},
      category: {},
      language: {},
      region: {},
      likes: [],
      favorites: []
      }) 

    //const { title, description, serves, cookTime, photo, ingredients, steps, author, category, language, region, likes, favorites, createdAt } = recipe

    const [open, setOpen] =  useState("")

    const [heart, setHeart] = useState('regular')

    const [bookmark, setBookmark] = useState('regular')

    const history = useNavigate()

    const showDescription = () =>{
        open==="" ? setOpen("opened") : setOpen("")
    } 

    const handleModal = () => {
      toggleModal()
      localStorage.setItem('shareUrl', `${window.location.protocol}//${window.location.host}/${id}`)
    } 

  const initCard = useCallback( async() => {
    try{
      await getRecipeById(id).then(data => {
        setRecipe(data)  
        if (isAuthenticated){
          setHeart(data.likes.includes(user._id) ? 'solid' : 'regular')
          setBookmark(data.favorites.includes(user._id) ? 'solid' : 'regular')
    } 
  }) 
  }catch(err){
    console.log(`error in initRecipe: ${err}`) }
  }, [id, user, isAuthenticated]) ; 

 useEffect(() => {
       try{  
         initCard() 
       }catch(err){
         console.log('error in the card component: '+err) 
       }
 }, [initCard]) 
      
  const handleLike = e => {
      e.preventDefault()
      if (isAuthenticated)  {
        const hasUserLike = recipe.likes.includes(user._id)
        //console.log(hasUserLike)
        if (hasUserLike){
          deleteLike(id, user._id)
        }else{
          addLike(id, user._id)
        }
        initCard()
      } else history('/login')
  }

  const handleFavorite = e => {
      e.preventDefault()
      if (isAuthenticated)  {
        const hasUserFav = recipe.favorites.includes(user._id)
        //console.log(hasUserFav)
        if (hasUserFav){
          deleteFavorite(id, user._id)
        }else{
          addFavorite(id, user._id)
        }
        initCard()
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
             <span className="w3-hover-text-deep-orange" style={{color : "blue"}} onClick={handleModal}><i className="fa-solid fa-share-nodes" title="Share"  /></span>
        </div>
        </div>
        <div className="card__image" onClick={showDescription}>
          <img src={recipe.photo ? recipe.photo : blankRecipe} alt={recipe.title} />
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



 