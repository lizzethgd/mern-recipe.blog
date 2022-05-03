import CardsList from './CardsList';
import Numeration from './Numeration';
import { useState, useCallback, useEffect, useContext } from "react";
import {useLocation, useNavigate } from 'react-router-dom'
import {sliceData, pagination} from "../helpers/funtions.js"
//import {AuthContext} from '../context/AuthContext';
import {recipesBySearch} from '../services/RecipeService';

const MySearch = () => {
    //const {isAuthenticated, user, setUser} = useContext(AuthContext);
    const location = useLocation()
    const {dispatch} = location.state 
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
          const slice = await sliceData(data, currentPage, pageSize)
          setTotalPages(totalPages)
          setPageSlice(slice)
          setPagesNumeration(pagination(totalPages, sibling, currentPage))
    }, [ dispatch, pageSize, sibling, currentPage])
  
    useEffect(() => {
        try{
        init()
       }catch(err){
          console.log(err)
      }
  }, [init]);
  
  
  return (
  <div className="w3-container">
      
  <CardsList pageSlice={pageSlice}/>
  
  <Numeration totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} pagesNumeration={pagesNumeration}/>
    
    </div> 
      )
}

export default MySearch
