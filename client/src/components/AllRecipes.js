import Filter from './Filter';
import CardsList from './CardsList';
import Numeration from './Numeration';
import { useState, useCallback, useEffect } from "react";
import {getAllRecipes} from '../services/RecipeService';

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([])

  const [pageSlice, setPageSlice] = useState( []); //data slice per page
 
  const [filters, setFilters] = useState({
    category: 'ND',
    language: 'ND',
    region: 'ND'
})

  const init = useCallback(async () => {
    await getAllRecipes(filters).then(data => 
    setRecipes(data)
  )},
 [filters] )

useEffect(() => {
      try{
        init()
     }catch(err){
        console.log(err)
    }

}, [init]);

console.log(pageSlice)

return (
<div className="w3-container">

<Filter filters={filters} setFilters={setFilters} /> 
    
<CardsList pageSlice={pageSlice} />

<Numeration data={recipes} setPageSlice={setPageSlice}/>

  </div> 
    )
}

export default AllRecipes