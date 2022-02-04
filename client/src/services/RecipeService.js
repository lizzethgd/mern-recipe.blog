export const getAllRecipes = async (filters) => {
  console.log(filters)

  const {categoryId, languageId, regionId } = filters
try{
  const response = await fetch(`recipe/recipes/${categoryId}/${languageId}/${regionId}`)
  return response.json()
}catch(err) {
    console.log(err)
 }

}
