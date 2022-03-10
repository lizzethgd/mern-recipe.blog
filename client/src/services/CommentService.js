export const getRecipeComments= async (recipeId) => {
    console.log(recipeId)
  try{
    //const res = await fetch(`recipe/recipes/${categoryId}/${languageId}/${regionId}`)
    const res = await fetch(`comment/${recipeId}`)
    console.log(res)
    return res.json()
  }catch(err) {
      console.log('error in commentService: '+err)
   }
  
}

export const createComment = async (comment) => {
    try{
        console.log(comment)
    const res = await fetch('comment/add', {
       method: 'POST',
       body: JSON.stringify(comment),
        headers: {
          'Content-Type': 'application/json'
        }  
        //body: comment
    })
    if (res.status !== 401)
      return res.json();
    }catch(err) {
   console.log('error in commentService: '+err)
  }
}


export const editComment = async (updateComment, id) => {
    try{
      const res = await fetch(`comment/${id}`, {
          method: 'PUT',
          body: updateComment,
        });
          return res.json();
      }catch(err) {
        console.log('error in recipeService: '+err)
      }
  }
  