import miniavatar from "../assets/images/avatar6.png"
import  "../assets/css/comment.scss"
import {getRecipe} from '../services/RecipeService';
import {useContext, useEffect, useState} from 'react'
import {AuthContext} from '../context/AuthContext';
import {Link, useNavigate, useParams } from 'react-router-dom'

const Recipe = () => {

    const {user} = useContext(AuthContext)
    const {id} = useParams()
/* 
    const [recipe, setRecipe] = useState({})
    const [ingredients, setIngredients] = useState([])
    const [steps, setSteps] = useState([])
    const [cookTime, setCookTime] = useState([])
    const [author, setAuthor] = useState({})
    const [comments, setComments] = useState([]) 
    const [category, setCategory] = useState({})
    const [language, setLanguage] = useState({})
    const [region, setRegion] = useState({}) */

    const [recipe, setRecipe] = useState({
        title: '',
        description: '',
        serves: '',
        cookTime: [],
        photo: '',
        ingredients: [' ', ' '],
        steps: [' ', ' '],
        author: {},
        category: {},
        language: {},
        region: {},
        comments: [],
        likes: []
        }) 
    
    const {title, description, serves, cookTime, photo, ingredients, steps, author, category, language, region, comments, likes} = recipe
    
    console.log(user)

   useEffect(() => {
        (async () => { 
          try{  
          //RecipeService.getRecipe(id).then(data=> {
              const data = await getRecipe(id)
              console.log(data)
              setRecipe(data);
          }catch(err){
            console.log('error in the page: '+err) 
         }
        })
       ()
     }, [])  

console.log(recipe)

return (
<div className="w3-container w3-light-green w3-center padd" >

<div className="w3-content w3-center w3-text-white padd" id="about">
    <img src="https://www.w3schools.com/w3images/avatar_hat.jpg" alt="Me" className="w3-image w3-padding" width="600" height="650" />
    <h2 className="w3-center padd w3-text-white">{title}</h2> 
    {/*  <div className="w3-center w3-large desc">{recipe.description? recipe.description: null}</div> */}
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
            {ingredients.map(ingredient =>
            <div className="w3-section">{ingredient}</div>
            )}    
        </div>
        </div>
        </div>
        
        <div className="w3-col m6 padd">
        <h3 className="w3-center">Preparation</h3>
        <ol>
            {  
            steps.map(step =>
            (<li><p className="w3-padding w3-white w3-justify w3-round">{step}</p></li>)
            )} 
        </ol>
        </div>

    </div> 

{user._id===author._id ? <Link className="w3-button w3-round w3-padding-large w3-deep-orange w3-hover-black" to="/editrecipe" state={{from: recipe}}><i className="fa-solid fa-pen-to-square"/> Edit</Link> : ''}

    <div className="w3-container  w3-center w3-text-white w3-padding-16">  
        Published by <img src={author.photo ? author.photo: miniavatar} className="w3-circle a-img"  alt="Avatar" /> @{author.username} on {recipe.createdAt} 
        <p  className="w3-large"><i className="fa-regular fa-heart" style={{color: "red"}} /> &nbsp;&nbsp;  <i className="fa-solid fa-share-alt"/> &nbsp;&nbsp; <i className="fa-regular fa-star" style={{color: "blue"}}/></p>
        <div className="w3-container w3-padding-small"/>  
        <hr className="w3-clear" />
    </div>
   
     
       <h4  className="w3-text-white"><i className="fa-solid fa-comments"/> Comments</h4>

    <div className="w3-container padd">
      
        {(comments.length!==0 ) ? 
            comments.map(comment =>
            (   <div className="w3-container w3-card w3-white w3-round w3-margin w3-padding">
            <img src={miniavatar} className="w3-left w3-circle w3-margin-right c-img"  alt="Avatar" />
            <div className="w3-left"><span>John Doe {comment.author}</span><span className="w3-opacity">@{comment.username}</span></div>
            <small className="w3-opacity w3-right">{comment.createdAt}</small><br/>
            <span className="w3-justify w3-left">{comment.content}</span>
            </div>
            )
        ): '' } 

     <div className="w3-container w3-round w3-padding-16">
        <img src={miniavatar} className="w3-left w3-circle c-img" style={{margin: "7px 8px 0 16px"}} alt="Avatar" />
        <form className=" w3-white w3-left w3-card w3-round comment-container">
            <textarea type="text"  id="comment" required/>
            <i className=" w3-button  w3-right  w3-hover-white fa-solid fa-paper-plane  button"/>
        </form>
     </div>
    
    </div>
 
    {/*<div className="w3-container w3-card w3-white w3-round w3-margin w3-padding"> 
        <p contenteditable="true" class="w3-border w3-padding">Status: Feeling Blue</p>
        <button type="button" class="w3-button w3-theme"><i class="fa fa-pencil"></i>  Post</button> 
      </div> */}

</div>
    )
}

export default Recipe 



