import Filter from './Filter';
import CardsList from './CardsList';
import Numeration from './Numeration';
import { useState, useCallback, useEffect, useContext } from "react";
import {getRecipes} from '../services/RecipeService';
import {AuthContext} from '../context/AuthContext';
/* import { useTranslation } from 'react-i18next'
import  "../assets/css/blank.scss" */

const AllRecipes = () => {

  const {filters, setFilters} = useContext(AuthContext);  
  //const { t } = useTranslation("global")

  const [recipes, setRecipes] = useState([])
  const [totalRecipes, setTotalRecipes] = useState(0)
  const [pageSlice, setPageSlice] = useState( []); //data slice per page

  const initRecipes= useCallback(async () => {
     
    await getRecipes(filters).then(data => {
            setRecipes(data.recipes)
            setTotalRecipes(data.total) }
    )},
 [filters ] )  

useEffect(() => {
      try{
        initRecipes()
     }catch(err){
        console.log(err)
    }
}, [initRecipes]);

return (
<div className="w3-container">

<Filter filters={filters} setFilters={setFilters} /> 

  <CardsList pageSlice={pageSlice} />

  <Numeration data={recipes} totalRecipes={totalRecipes} setPageSlice={setPageSlice}/>
   
</div> 
)
}

export default AllRecipes