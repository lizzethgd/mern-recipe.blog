import '../assets/css/cards.scss'
import Card from './Card';
import { useState, useEffect, useContext } from "react";
import {calculateRange, sliceData} from "../helpers/funtions.js"
import {getAllRecipes} from '../services/RecipeService';

const CardsList = () => {
  const [recipes,setRecipes] = useState([]);
  const [totalPages, setTotalPages] = useState([]); //total number of pages 
  const [currentPage, setCurrentPage] = useState();
  const [pageSlice, setPageSlice] = useState( []); //data slice per page

const onChangePage = (data, i) => {
  setCurrentPage(i)
  setPageSlice(sliceData(data, i, 6))
  console.log(i)
}

  useEffect(() => {
   (async () => { 
      try{
        const data =  await getAllRecipes()
        setTotalPages(calculateRange(data.length, 6))
        console.log(calculateRange(data.length, 6))
        //setPageSlice(sliceData(data, 1, 6))
        onChangePage(data, 1)
        setRecipes(data)
     }catch(error){
        console.log(error)
    }
   } )() 
  // }, [data, setTotalPages, currentPage, setPageSlice]);
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
 pageSlice.map(recipe => (
      <Card key={recipe._id} author={recipe.author.username} date="1 min" title={recipe.title} pic="https://source.unsplash.com/300x225/?desert" 
     description={recipe.description}  nLikes={recipe.likes.length} nFavs={2} />
     ) 
    )
  }

</div> 
 
 <div className="w3-padding-32 w3-text-white">   
    <div className="w3-bar">
    <button className="w3-bar-item w3-black w3-button" onClick={ ()=> setPageSlice(sliceData(recipes, 1, 6))}>«</button>
    <button className="w3-bar-item w3-black w3-button" onClick={ ()=>  currentPage>1 ? onChangePage(recipes, currentPage-1): null }><i className="fa-solid fa-caret-left"/></button>
    { totalPages.map( page=>
          <button key={page} className="w3-bar-item w3-black w3-button" onClick={ ()=> onChangePage(recipes, page)}>{ page}</button>)
       }
    <button className="w3-bar-item w3-black w3-button" onClick={ ()=> currentPage<totalPages.length ? onChangePage(recipes, currentPage+1) : null}><i className="fa-solid fa-caret-right"/></button>   
    <button className="w3-bar-item w3-black w3-button" onClick={ ()=> setPageSlice(sliceData(recipes, totalPages.length-1, 6)) }>»</button> 
    </div>
  </div>
  
  </div> 
    )
}

export default CardsList

function newFunction(setPageSlice, data, currentPage) {
  setPageSlice(sliceData(data, currentPage, 6));
}

