import CardsList from './CardsList';
import Numeration from './Numeration';
import { useState, useCallback, useEffect} from "react";
import {recipesBySearch} from '../services/RecipeService';
import { useTranslation } from 'react-i18next'
import  "../assets/css/blank.scss"

const MySearch = () => {

    const dispatch = localStorage.getItem('search')
    const { t } = useTranslation("global")

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
  <div className="w3-container w3-light-green w3-padding-top-32">
      
    {recipes.length >0 
    ? 
    <>
    <CardsList pageSlice={pageSlice}/> 
    <Numeration data={recipes} totalRecipes={totalRecipes} setPageSlice={setPageSlice}/>
    </>
    :
    <div className='blank'>
    <p>{t('blank.search')}</p>
    </div>
    }
        
    </div> 
      )
}

export default MySearch
