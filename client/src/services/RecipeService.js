
export const getRecipe = async (id) => {
  console.log(id)
try{
  const res = await fetch(`recipe/${id}`)
  console.log(res)
  if (res.status !== 401)
  return res.json()
}catch(err) {
    console.log('error in recipeService: '+err)
 }

}

export const getAllRecipes = async (filters) => {

  console.log(filters)
  const {category, language, region } = filters
  try{
  const res = await fetch(`recipe/recipes/${category}/${language}/${region}`)
  //const res = await fetch('recipe/recipes')
  console.log(res)
  return res.json()

  }catch(err) {
    console.log('error in recipeService: '+err)
  }
}

export const getRecipeByUser = async (id) => {
  console.log(id)
  try{
  //const res = await fetch(`recipe/recipes/${categoryId}/${languageId}/${regionId}`)
  const res = await fetch(`recipe/author/${id}`)
  console.log(res)
  return res.json()

  }catch(err) {
    console.log('error in recipeService: '+err)
  }
}

export const editRecipe = async (updateRecipe, id) => {
  try{
    const res = await fetch(`recipe/${id}`, {
        method: 'PUT',
        body: updateRecipe,
      });
      if (res.status !== 401)
        return res.json();
    }catch(err) {
      console.log('error in recipeService: '+err)
    }
}

export const createRecipe = async (recipe) => {
  try{
    const res = await fetch('recipe/create', {
      method: 'POST',
      body: recipe,
  });
  if (res.status !== 401)
    return res.json();
  }catch(err) {
    console.log('error in recipeService: '+err)
  }
}

export const removeRecipe = async (id) => {
  try{
    const res = await fetch(`recipe/${id}`, {
        method: 'DELETE',
      });
      if (res.status !== 401)
        return res.json();
    }catch(err) {
      console.log('error in recipeService: '+err)
    }
}
