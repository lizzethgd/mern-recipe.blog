import '../assets/css/cards.scss'
import Card from './Card';
//import Numeration from './Numeration';
//import { useState, useMemo, useEffect, useContext } from "react";
//import {sliceData, pagination} from "../helpers/funtions.js"
//import {getAllRecipes} from '../services/RecipeService'; 

const CardsList = ({pageSlice}) => {
 
return (
 <div className="cards__container">
 {
 pageSlice.map((recipe, i) => (
      <Card key={i} author={recipe.author.username} date="1 min" title={recipe.title} pic="https://source.unsplash.com/300x225/?desert" 
     description={recipe.description}  nLikes={recipe.likes.length} nFavs={2} />
     ) 
    )
  }

</div> 
)
}

export default CardsList



