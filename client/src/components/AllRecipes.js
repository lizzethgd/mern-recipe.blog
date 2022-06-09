import Filter from './Filter';
import CardsList from './CardsList';
import Numeration from './Numeration';
import { useState, useCallback, useEffect } from "react";
import {getAllRecipes} from '../services/RecipeService';
import {slicer, paginater} from "../helpers/funtions.js"

const AllRecipes = () => {
  const [filters, setFilters] = useState({
    category: 'ND',
    language: 'ND',
    region: 'ND'
})

  const [recipes, setRecipes] = useState([])
  const [totalRecipes, setTotalRecipes] = useState(0)

  const [pageSlice, setPageSlice] = useState( []); //data slice per page

  /* const [currentPage, setCurrentPage] = useState(1);

  const [totalPages, setTotalPages] = useState(); //total number of pages 
  const [pagesNumeration, setPagesNumeration] = useState([]); //tipe of numeration

   const pageSize = 2
  const sibling = 1 */

  const initRecipes= useCallback(async () => {
    await getAllRecipes(filters).then(data => {
            setRecipes(data.recipes)
            setTotalRecipes(data.total) }
    )},
 [filters] )

 /*const initPagination = useCallback(async () => {
  const totalPages = Math.ceil((data.length) / pageSize);
  setTotalPages(totalPages)
 const slice = slicer(data, currentPage, pageSize)
  setPageSlice(slice) 
  const numerationPages = paginater(totalPages, sibling, currentPage)
  setPagesNumeration(numerationPages)
  console.log('Total recetas: '+data.length+', Total pages: '+totalPages
  +', paginas: '+numerationPages+', Current Page: '+currentPage)
  //console.log(slice)
}, [ currentPage])  */  

useEffect(() => {
      try{
       initRecipes()
     }catch(err){
        console.log(err)
    }

}, [initRecipes]);

console.log(pageSlice)

return (
<div className="w3-container">

<Filter filters={filters} setFilters={setFilters} /> 
    
<CardsList pageSlice={pageSlice} />

<Numeration data={recipes} totalRecipes={totalRecipes} setPageSlice={setPageSlice}/>

  </div> 
    )
}

export default AllRecipes