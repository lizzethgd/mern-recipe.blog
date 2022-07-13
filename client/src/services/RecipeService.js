export const getRecipeById = async (id) => {
try{
  console.log(id)
  const res = await fetch(`/recipe/recipe/${id}`).then(response => response.json())
  if (res.status !== 401)
  return await res
}catch(err) {
    console.log('error in recipeService: '+err)
 }
}

export const createRecipe = async (recipe) => {
  console.log(recipe)
  try{
    const res = await fetch('recipe/create', {
      method: 'POST',
      body: recipe,
  });
  if (res.status !== 401 )
    return await res.json();
  }catch(err) {
    console.log('error in recipeService: '+err)
  }
}

export const getAllRecipes = async (filters) => {
  //console.log(filters)
  const {category, language, region } = filters
  try{
  const res = await fetch(`recipe/recipes/${category}/${language}/${region}`)
  //const res = await fetch('recipe/recipes')
  return await res.json()

  }catch(err) {
    console.log('error in recipeService: '+err)
  }
}

export const recipesBySearch = async (search) => {
  console.log(search)
  try{
  const res = await fetch(`recipe/recipes/${search}`)
  console.log(res)
  return await res.json()

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
  return await res.json()

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
        return await res.json();
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
        return await res.json();
    }catch(err) {
      console.log('error in recipeService: '+err)
    }
}
