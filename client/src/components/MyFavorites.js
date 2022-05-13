import CardsList from './CardsList';
import Numeration from './Numeration';
import { useState, useEffect, useContext } from "react";
import {sliceData, pagination} from "../helpers/funtions.js"
import {AuthContext} from '../context/AuthContext';
import {favoritesByUser} from '../services/FavoriteService';

const MyFavorites = () => {
    const { user} = useContext(AuthContext);
    const [totalPages, setTotalPages] = useState(); //total number of pages 
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSlice, setPageSlice] = useState( []); //data slice per page
    const [pagesNumeration, setPagesNumeration] = useState([]); //tipe of numeration
   
    const pageSize = 2 
    const sibling = 1
  
    useEffect(() => {
     (async () => { 
        try{
          const data =  await favoritesByUser(user._id)
          const totalPages = Math.ceil(data.length / pageSize);
          const slice = await sliceData(data, currentPage, pageSize)
          setTotalPages(totalPages)
          setPageSlice(slice)
          setPagesNumeration(pagination(totalPages, sibling, currentPage))
       }catch(err){
          console.log(err)
      }
     }) () 
  }, [user, pageSize, sibling, currentPage]);
  
  
  return (
  <div className="w3-container">
      
  <CardsList pageSlice={pageSlice}/>
  
  <Numeration totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} pagesNumeration={pagesNumeration}/>
    
    </div> 
      )
}

export default MyFavorites
