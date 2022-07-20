import CardsList from './CardsList';
import Numeration from './Numeration';
import { useState, useCallback, useEffect} from "react";
import {recipesBySearch} from '../services/RecipeService';

const MySearch = () => {

    const dispatch = localStorage.getItem('search')
    const [recipes, setRecipes] = useState([])
    const [totalRecipes, setTotalRecipes] = useState(0)
    const [pageSlice, setPageSlice] = useState( []); //data slice per page

    const initRecipes= useCallback(async () => {
      await recipesBySearch(dispatch).then(data => {
        console.log(data.recipes)
              setRecipes(data.recipes)
              setTotalRecipes(data.total) }
      )}, [dispatch] ) 
  
    useEffect(() => {
        try{
         initRecipes()
       }catch(err){
          console.log(err)
      }
    }, [initRecipes]);  

  return (
  <div className="w3-container w3-light-green">
      
  <CardsList pageSlice={pageSlice}/>
  
  <Numeration data={recipes} totalRecipes={totalRecipes} setPageSlice={setPageSlice}/>
    
    </div> 
      )
}

export default MySearch
