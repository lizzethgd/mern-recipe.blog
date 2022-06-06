import CardsList from './CardsList';
import Numeration from './Numeration';
import { useState, useCallback, useEffect} from "react";
import {slicer, paginater} from "../helpers/funtions.js"
import {recipesBySearch} from '../services/RecipeService';

const MySearch = () => {

    const dispatch = localStorage.getItem('search')
    const [totalPages, setTotalPages] = useState(); //total number of pages 
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSlice, setPageSlice] = useState( []); //data slice per page
    const [pagesNumeration, setPagesNumeration] = useState([]); //tipe of numeration
   
    const pageSize = 2 
    const sibling = 1

    const init = useCallback(async () => {
     const data =  await recipesBySearch(dispatch)
          console.log(data)
          const totalPages = Math.ceil(data.length / pageSize);
          const slice = await slicer(data, currentPage, pageSize)
          setTotalPages(totalPages)
          setPageSlice(slice)
          setPagesNumeration(paginater(totalPages, sibling, currentPage))
    }, [ dispatch, pageSize, sibling, currentPage])
  
    useEffect(() => {
        try{
        init()
       }catch(err){
          console.log(err)
      }
  }, [ init]);
  
  
  return (
  <div className="w3-container">
      
  <CardsList pageSlice={pageSlice}/>
  
  <Numeration totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} pagesNumeration={pagesNumeration}/>
    
    </div> 
      )
}

export default MySearch
