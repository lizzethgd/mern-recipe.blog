export const addFavorite = async (recipeId, userId) => {
    try{
      console.log(recipeId, userId)
    const res = await fetch(`favorite/add/${recipeId}/${userId}`, {
       method: 'PUT',
       body: JSON.stringify(),
        headers: {
          'Content-Type': 'application/json'
        }  
        //body: comment
    })
    if (res.status !== 401)
      return res.json();
    }catch(err) {
   console.log('error in favoriteService: '+err)
  }
}

export const deleteFavorite = async (recipeId, userId) => {
    try{
      const res = await fetch(`favorite/remove/${recipeId}/${userId}`, {
          method: 'DELETE',
        });
        if (res.status !== 401)
          return res.json();
      }catch(err) {
        console.log('error in favoriteService: '+err)
      }
}

export const favoritesByUser = async (userId) => {
  try{
    const res = await fetch(`favorite/${userId}`)
      if (res.status !== 401)
        return res.json();
    }catch(err) {
      console.log('error in favoriteService: '+err)
    }
}