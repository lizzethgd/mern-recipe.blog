import CardsList from './CardsList';
import Numeration from './Numeration';
import { useState, useMemo, useEffect, useContext } from "react";
import {sliceData, pagination} from "../helpers/funtions.js"
import {getAllRecipes} from '../services/RecipeService';

const AllRecipes = () => {
  const [totalPages, setTotalPages] = useState(); //total number of pages 
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSlice, setPageSlice] = useState( []); //data slice per page
  const [pagesNumeration, setPagesNumeration] = useState([]); //tipe of numeration

  const pageSize = 2
  const sibling = 1

  const filters = {}   
  
  useEffect(() => {
   (async () => { 
      try{
        const data =  await getAllRecipes()
        const totalPages = Math.ceil(data.length / pageSize);
        setTotalPages(totalPages)
        setPageSlice(sliceData(data, currentPage, pageSize))
        setPagesNumeration(pagination(totalPages, sibling, currentPage))
     }catch(err){
        console.log(err)
    }
   }) () 
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


<CardsList pageSlice={pageSlice}/>

<Numeration totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} pagesNumeration={pagesNumeration}/>
  
  </div> 
    )
}

export default AllRecipes