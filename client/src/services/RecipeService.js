export const getAllRecipes = async () => {
try{
  const response = await fetch('recipe/recipes')
  return response.json()
}catch(err) {
    console.log(err)
 }
}