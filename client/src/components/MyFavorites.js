import CardsList from './CardsList';
import Numeration from './Numeration';
import { useState, useCallback, useEffect, useContext } from "react";
import {AuthContext} from '../context/AuthContext';
import {favoritesByUser} from '../services/FavoriteService';
import { useTranslation } from 'react-i18next'
import  "../assets/css/blank.scss"

const MyFavorites = () => {
   
   const { user} = useContext(AuthContext)

   const { t } = useTranslation("global")

   const [recipes, setRecipes] = useState([])
   const [totalRecipes, setTotalRecipes] = useState(0)  
   const [pageSlice, setPageSlice] = useState( []); //data slice per page

   const initRecipes= useCallback(async () => {
      await favoritesByUser(user._id).then(data => {
              setRecipes(data.recipes)
              setTotalRecipes(data.total) }
      )},
   [user] ) 
  
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
    <p>{t('blank.myFavs')}</p>
    </div>
    }
  </div> 
  )
}

export default MyFavorites
