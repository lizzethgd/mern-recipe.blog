export const getRecipeComments= async (recipeId) => {
  try{
    //const res = await fetch(`recipe/recipes/${categoryId}/${languageId}/${regionId}`)
    const res = await fetch(`comment/${recipeId}`)
    return res.json()
  }catch(err) {
      console.log('error in commentService: '+err)
   }
  
}

export const addComment = async (comment) => {
    try{
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


export const removeComment = async (id) => {
    try{
      const res = await fetch(`comment/${id}`, {
          method: 'DELETE',
        });
        if (res.status !== 401)
          return res.json();
      }catch(err) {
        console.log('error in commentService: '+err)
      }
} 
  