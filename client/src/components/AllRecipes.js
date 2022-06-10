import Filter from './Filter';
import CardsList from './CardsList';
import Numeration from './Numeration';
import { useState, useCallback, useEffect } from "react";
import {getAllRecipes} from '../services/RecipeService';

const AllRecipes = () => {
  
  const [filters, setFilters] = useState({
    category: 'ND',
    language: 'ND',
    region: 'ND'
  })

  const [recipes, setRecipes] = useState([])
  const [totalRecipes, setTotalRecipes] = useState(0)
  const [pageSlice, setPageSlice] = useState( []); //data slice per page

  const initRecipes= useCallback(async () => {
    await getAllRecipes(filters).then(data => {
            setRecipes(data.recipes)
            setTotalRecipes(data.total) }
    )},
 [filters] ) 

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