export const getAllRecipes =  () => 
fetch('api/recipe/recipes', {
  method: 'GET'
})
  .then(response => {
     return response.json()
  })
  .catch(err => {
    console.log(err)
  })