export const getRecipeById = async (id) => {
try{
  const res = await fetch(`recipe/${id}`).then(response => response.json())
  if (res.status !== 401)
  return await res
}catch(err) {
    console.log('error in recipeService: '+err)
 }
}

export const getRecipes = async (filters) => {
  const {language, category, region} = filters
  try{
    const res = await fetch(`recipe/recipes/${language}/${category}/${region}`)
    return await res.json()
  }catch(err) {
    console.log('error in recipeService: '+err)
  }
}

export const recipesBySearch = async (search) => {
  try{
    const res = await fetch(`recipe/recipes/${search}`)
    return await res.json()
  }catch(err) {
    console.log('error in recipeService: '+err)
  }
}

export const getRecipeByUser = async (userId) => {
  try{
    const res = await fetch(`recipe/author/${userId}`)
    return await res.json()
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

export const removePhoto = async (photoURL) => {
  const photo = {url : photoURL}
  try{
    const res = await fetch(`recipe/photo`, {
        method: 'PUT',
        body: JSON.stringify(photo),
        headers: {
          "Content-Type": "application/json"
        }
      });
        return await res.json();
    }catch(err) {
      console.log('error in recipeService photo: '+err)
    }
}