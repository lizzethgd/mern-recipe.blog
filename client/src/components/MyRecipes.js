import CardsList from './CardsList';
import Numeration from './Numeration';
import { useState, useCallback, useEffect, useContext } from "react";
import {AuthContext} from '../context/AuthContext';
import {getRecipeByUser} from '../services/RecipeService';

const MyRecipes = () => {

  const {user} = useContext(AuthContext);
  
  const [recipes, setRecipes] = useState([])
  const [totalRecipes, setTotalRecipes] = useState(0)
  const [pageSlice, setPageSlice] = useState( []); //data slice per page

  const initRecipes= useCallback(async () => {
    await getRecipeByUser(user._id).then(data => {
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
<div className="w3-container" >
    
<CardsList pageSlice={pageSlice}/>

<Numeration data={recipes} totalRecipes={totalRecipes} setPageSlice={setPageSlice}/>
  
  </div> 
    )
}

export default MyRecipes