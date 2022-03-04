
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
  const {categoryId, languageId, regionId } = filters
  console.log(categoryId)
try{
  //const res = await fetch(`recipe/recipes/${categoryId}/${languageId}/${regionId}`)
  const res = await fetch('recipe/recipes')
  console.log(res)
  return res.json()

}catch(err) {
    console.log('error in recipeService: '+err)
 }

}

export const updateRecipe = async (updateUser, id) => {
  try{
    const res = await fetch(`recipe/${id}`, {
        method: 'PUT',
        body: updateUser,
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
    body: recipe
  })
  if (res.status !== 401)
    return res.json();
  }catch(err) {
 console.log('error in recipeService: '+err)
}
}


