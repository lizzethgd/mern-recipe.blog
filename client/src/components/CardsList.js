import '../assets/css/cards.scss'
import Card from './Card';
import { useState, useMemo, useEffect, useContext } from "react";
import {sliceData, pagination} from "../helpers/funtions.js"
import {getAllRecipes} from '../services/RecipeService';

const CardsList = () => {
  const [totalPages, setTotalPages] = useState(); //total number of pages 
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSlice, setPageSlice] = useState( []); //data slice per page
  const [pagesNumeration, setPagesNumeration] = useState([]); //tipe of numeration

  const pageSize = 2
  const sibling = 1
  

const onChangePage = ( i) => {
  setCurrentPage(i)
  //setPageSlice(sliceData(data, i, 6))
  console.log(i)
}

  useEffect(() => {
   (async () => { 
      try{
        const data =  await getAllRecipes()
        const totalPages = Math.ceil(data.length / pageSize);
        setTotalPages(totalPages)
        /* const totalPages = calculatePages(data.length, pageSize)
        setTotalPages(totalPages)
        console.log(totalPages.length) */
      //const pag = pagination(data.length, pageSize, siblingCount, currentPage)
        //console.log(pag)
        setPageSlice(sliceData(data, currentPage, pageSize))
        setPagesNumeration(pagination(totalPages, sibling, currentPage))
     }catch(err){
        console.log(err)
    }
   }) () 
  // }, [data, setTotalPages, currentPage, setPageSlice]);
}, [sliceData, pagination, pageSize, sibling, currentPage, setTotalPages, setPagesNumeration, setPageSlice]);



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
 pageSlice.map((recipe, i) => (
      <Card key={i} author={recipe.author.username} date="1 min" title={recipe.title} pic="https://source.unsplash.com/300x225/?desert" 
     description={recipe.description}  nLikes={recipe.likes.length} nFavs={2} />
     ) 
    )
  }

</div> 
 
 <div className="w3-padding-32 w3-text-white">   
    <div className="w3-bar">
    <button className="w3-bar-item w3-black w3-button" onClick={ ()=> onChangePage(1)}>«</button>
    <button className="w3-bar-item w3-black w3-button" onClick={ ()=>  currentPage>1 ? onChangePage(currentPage-1): null }><i className="fa-solid fa-caret-left"/></button>
    { pagesNumeration.map( (page, i)=> {
          if (page === '...') 
          { return <button key={i} className="w3-bar-item w3-black">&#8230;</button>;}
          
          return <button key={i} className="w3-bar-item w3-black w3-button" onClick={ ()=> onChangePage(page)}>{ page}</button>
       })
    }   
    <button className="w3-bar-item w3-black w3-button" onClick={ ()=> currentPage<totalPages ? onChangePage(currentPage+1) : null}><i className="fa-solid fa-caret-right"/></button>   
    <button className="w3-bar-item w3-black w3-button" onClick={ ()=> onChangePage(totalPages) }>»</button> 
    </div>
  </div>
  
  </div> 
    )
}

export default CardsList



