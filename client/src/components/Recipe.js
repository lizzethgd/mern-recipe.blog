import miniavatar from "../assets/images/avatar6.png"
import  "../assets/css/comment.scss"
import {getRecipe, removeRecipe} from '../services/RecipeService'
import {getRecipeComments, addComment, removeComment} from '../services/CommentService'
import {addLike, deleteLike} from '../services/LikeService'
import {addFavorite, deleteFavorite} from '../services/FavoriteService'
import {useContext, useEffect, useState, useCallback} from 'react'
import {AuthContext} from '../context/AuthContext'
import {Link, useParams , useNavigate} from 'react-router-dom'
import ShareModal from './ShareModal'

const Recipe = () => {

  const {user, isAuthenticated} = useContext(AuthContext)
  console.log(user)
  const {id} = useParams()

  console.log(id)

  const history = useNavigate()

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

  const { title, description, serves, cookTime, photo, ingredients, steps, author, category, language, region, likes, favorites, createdAt } = recipe

  const [comments, setComments] = useState([])

  const [newComment, setNewComment] = useState({
      content: '',
      recipe: id,
      author: ''
  })

  const [heart, setHeart] = useState('regular')

  const [bookmark, setBookmark] = useState('regular')

  const initRecipe = useCallback(async () => {
    const data = await getRecipe(id)
    const dataLikes = await data.likes
    const dataFavorites = await data.favorites
    setRecipe(data);
    if (isAuthenticated){
      setHeart(dataLikes.includes(user._id) ? 'solid' : 'regular')
      setBookmark(dataFavorites.includes(user._id) ? 'solid' : 'regular')
    }
    setNewComment({...newComment, author: user._id})
  }, [id, user._id, isAuthenticated, setRecipe, setHeart, setBookmark, newComment, setNewComment]);


  const initComments = useCallback(async () => {
    const data= await getRecipeComments(id)
    setComments(data);
  }, [id, setComments]);


  useEffect(() => {
        try{  
          initRecipe()
          initComments()
        }catch(err){
          console.log('error in the cardList component: '+err) 
        }
  }, [initRecipe, initComments]) 

  const addAComment = e => { 
      e.preventDefault();
      if (isAuthenticated)  {
      addComment(newComment)
      .then(getRecipeComments(id)
      .then(data=> {
            setComments(data) 
            setNewComment({...newComment, content : ''})
          })
        )
      } else history('/login')
  }  

  const handleChange =  e => {
      e.preventDefault();
      setNewComment({...newComment, [e.target.id]: e.target.value })
  }  
    
  const deleteRecipe = e => {
      e.preventDefault()
      removeRecipe(id)
      history('/')
  }

  const deleteComment = (e, commentId) => {
      e.preventDefault()
      removeComment(commentId)
      initComments()
  }
    
  const handleLike = e => {
      e.preventDefault()
      if (isAuthenticated)  {
        //const hasLike = likes.some(like => like._id === user._id)
        const hasUserLik = likes.includes(user._id)
        console.log(hasUserLik)
        if (hasUserLik){
          deleteLike(id, user._id)
        }else{
          addLike(id, user._id)
        }
    
      } else history('/login')
  }

  const handleFavorite = e => {
      e.preventDefault()
      if (isAuthenticated)  {
        //const hasFavorite = favorites.some(favorite => favorite._id === user._id)
        const hasUserFav = favorites.includes(user._id)
        console.log(hasUserFav)
        if (hasUserFav){
          deleteFavorite(id, user._id)
        }else{
          addFavorite(id, user._id)
        }
      
      } else history('/login')
  } 

  const [modalShow, setModalShow] = useState({show: false, newURL: ''})

//const [modalShow, setModalShow] = useState(false)

const {show, newURL} = modalShow

//const modalToggle = () => setModalShow(!modalShow)

const modalToggle = () => setModalShow({...modalShow, show: !show, newURL: 'http://localhost:3000'})

console.log(window.location.href)

return (
<div className="w3-container w3-light-green w3-center padd" >

  <div className="w3-content w3-center w3-text-white padd" id="about">
    <img src={photo ? photo : "https://www.w3schools.com/w3images/avatar_hat.jpg"} alt="Me" className="w3-image w3-padding" width="600" height="650" />
    <h2 className="w3-center padd w3-text-white">{title}</h2> 
    <div className="w3-center w3-large desc">{description? description: null}</div> 
    <div className=" w3-center r-icons">
        <div className="r-icon"><i className="fa-solid fa-users"/> {serves?  serves : '-.-'}</div>
        <div className="r-icon"><i className="fa-solid fa-stopwatch " /> {cookTime.length!==0 ? cookTime[0]+':'+cookTime[1] : '-.-'} </div> 
       <div className="r-icon"><i className="fa-solid fa-rectangle-list" /> {category.name} </div>
        <div className="r-icon"><i className="fa-solid fa-language" /> {language.name} </div>  
        <div className="r-icon"><i className="fa-solid fa-earth-americas "/> {region.name} </div> 
    </div> 
  </div> 

  <div className="w3-row padd  w3-text-white "  >
        
    <div className="w3-col m6 padd ">  
      <h3 className="w3-center">Ingredients</h3>
      <div style={{padding:"6px 16px"}}>
        <div className=" w3-white w3-padding" >
            {ingredients.map((ingredient,i) =>
            <div className="w3-section" key={i}>{ingredient}</div>
            )}    
        </div>
      </div>
    </div>
        
    <div className="w3-col m6 padd">
      <h3 className="w3-center">Preparation</h3>
      <ol>
        { steps.map((step, i) =>
        (<li key={i}><p className="w3-padding w3-white w3-justify w3-round">{step}</p></li>)
        )} 
      </ol>
    </div>

  </div> 

  { (user._id===author._id) 
  ? <><Link className="w3-button w3-round w3-padding-large w3-deep-orange w3-hover-black" to="/editrecipe" state={{ dispatch: recipe }}>
      <i className="fa-solid fa-pen-to-square" /> Edit</Link>
    <button className="w3-button w3-round w3-padding-large w3-grey w3-hover-black" style={{marginLeft: '20px'}} onClick={deleteRecipe}>
        <i className="fa-solid fa-ban"/> Delete</button></>
  : ''}

  <div className="w3-container  w3-center w3-text-white w3-padding-16">  
    Published by <img src={author.photo ? author.photo: miniavatar} className="w3-circle a-img"  alt="Avatar" /> @{author.username} on {new Date(createdAt).toLocaleDateString()} 
    <p className="w3-large">
        <i className={`fa-${heart} fa-heart`} style={{color: "red", cursor: 'pointer'}} onClick={handleLike}/> {likes.length > 0 ? likes.length : ''} &nbsp;&nbsp;&nbsp;   
        <i className="w3-button w3-hover-white w3-hover-text-deep-orange fa-solid fa-share-alt" onClick={modalToggle}/> &nbsp;&nbsp;&nbsp; 
        <i className={`fa-${bookmark} fa-bookmark`} style={{color: "darkblue", cursor: 'pointer'}} onClick={handleFavorite}/> {favorites.length > 0 ? favorites.length : ''}
    </p>
    <div className="w3-container w3-padding-small"/>  
    <hr className="w3-clear" />
  </div>
       
  <h4  className="w3-text-white"><i className="fa-solid fa-comments"/> Comments:  {comments.length}</h4>

  <div className="w3-container padd">
      
    {(comments.length!==0 ) ? 
        comments.map(comment =>
        (   <div className="w3-container w3-card w3-white w3-round w3-margin w3-padding" key={comment._id}>
        <img src={comment.author.photo ? comment.author.photo : miniavatar} className="w3-left w3-circle w3-margin-right c-img"  alt="Avatar" />
        <div className="w3-left"><span>{comment.author.fistName} {comment.author.lastName}</span><span className="w3-opacity">@{comment.author.username}</span></div>
        <small className="w3-opacity w3-right">{comment.createdAt}</small><br/>
        <span className="w3-justify w3-left">{comment.content}</span>
        {(user._id===comment.author._id) 
        ? <i className="fa-solid fa-circle-xmark w3-right" onClick={(e) => deleteComment(e, comment._id)} style={{cursor: 'pointer', color: '#ff3d00'}} />
        : '' }
        </div>
        )
    ): '' } 

    <div className="w3-container w3-round w3-padding-16" >
        <img src={user.photo ? user.photo : miniavatar} className="w3-left w3-circle a-img" style={{ margin: "7px 8px 0 16px"}} alt="Avatar" />
        <form className=" w3-white w3-left w3-card w3-round comment-container">
            <textarea type="text"  id="content" value={newComment.content} onChange={handleChange} required/>
            <i className="w3-button w3-right w3-hover-white fa-solid fa-paper-plane button" style={{color: '#ff5722'}} onClick={addAComment}/>
        </form>
    </div>
    
  </div>

  <ShareModal showModal={modalShow} hideModal={modalToggle} /> 
  
</div>
    )
}

export default Recipe 



