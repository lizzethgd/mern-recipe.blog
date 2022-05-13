import Filter from './Filter';
import CardsList from './CardsList';
import Numeration from './Numeration';
import { useState, useCallback, useEffect } from "react";
import {sliceData, pagination} from "../helpers/funtions.js"
import {getAllRecipes} from '../services/RecipeService';

const AllRecipes = () => {
  const [totalPages, setTotalPages] = useState(); //total number of pages 
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSlice, setPageSlice] = useState( []); //data slice per page
  const [pagesNumeration, setPagesNumeration] = useState([]); //tipe of numeration
  const [filters, setFilters] = useState({
    category: 'ND',
    language: 'ND',
    region: 'ND'
})

  const pageSize = 2 
  const sibling = 1

  const init = useCallback(async () => {
    const data =  await getAllRecipes(filters)
    console.log(data.length)
    const totalPages = Math.ceil(data.length / pageSize);
    setTotalPages(totalPages)
    setPageSlice(sliceData(data, currentPage, pageSize))
    setPagesNumeration(pagination(totalPages, sibling, currentPage))
  }, [filters, currentPage])

useEffect(() => {
      try{
        init()
     }catch(err){
        console.log(err)
    }

}, [init]);

//console.log(filters)

return (
<div className="w3-container">

<Filter filters={filters} setFilters={setFilters} /> 
    
<CardsList pageSlice={pageSlice}/>

<Numeration totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} pagesNumeration={pagesNumeration}/>
  
  </div> 
    )
}

export default AllRecipes