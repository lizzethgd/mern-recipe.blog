import '../assets/css/cards.scss'
import Card from './Card';
import { useState, useEffect, useContext } from "react";
import {calculateRange, sliceData} from "../helpers/funtions.js"
import {getAllRecipes} from '../services/RecipeService';

const CardsList = () => {
  const [recipes,setRecipes] = useState([]);
  const [tableRange, setTableRange] = useState([]);
  const [page, setPage] = useState(1);
  const [slice, setSlice] = useState( []);
 

/*   const loadRecipes = () => {
    getAllRecipes().then(data =>{
      if (data.error) {
        console.log(data.error)
      } else {
    setRecipes(data)
    console.log(data)
      }
  })
}  */

  useEffect(() => {

    getAllRecipes().then(data =>{
      if (data.error) {
        console.log(data.error)
      } else {
         setTableRange(calculateRange(data.length, 6))
         console.log(calculateRange(data.length, 6))
        setSlice(sliceData(data, page, 6));
         setRecipes(data)
      }
  })
  
  // }, [data, setTableRange, page, setSlice]);
}, [calculateRange, sliceData]);

return (
<div className="w3-container">
    
<div className="w3-section w3-padding-32">
      <span className="w3-margin-right">Filter:</span> 
      <button className="w3-button w3-black">ALL</button>
      <button className="w3-button w3-white w3-hide-small"><i className="fa-solid fa-rectangle-list w3-margin-right"></i>Category</button>
      <button className="w3-button w3-white w3-hide-small"><i className="fa-solid fa-language w3-margin-right"></i>Language</button>
      <button className="w3-button w3-white w3-hide-small"><i className="fa-solid fa-earth-americas w3-margin-right"></i>Region</button>
</div>

 <div className="cards__container">
 {
 slice.map(recipe => (
      <Card key={recipe._id} author={recipe.author.username} date="1 min" title={recipe.title} pic="https://source.unsplash.com/300x225/?desert" 
     description={recipe.description}  nLikes={recipe.likes.length} nFavs={2} />
     ) 
    )
  }

</div> 
 
 <div className="w3-padding-32 w3-text-white">   
    <div className="w3-bar">
    <button className="w3-bar-item w3-black w3-button" onClick={ ()=> setSlice(sliceData(recipes, 1, 6))}>«</button>
    { tableRange.map( element=>
          <button key={element} className="w3-bar-item w3-black w3-button" onClick={ ()=> setSlice(sliceData(recipes, element, 6))}>{ element}</button>)
       }
    <button className="w3-bar-item w3-black w3-button" onClick={ ()=> setSlice(sliceData(recipes, tableRange.length-1, 6))}>»</button> 
    </div>
  </div>
  
  </div> 
    )
}

export default CardsList

