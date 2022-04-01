export const addLike = async (recipeId, userId) => {
    try{
        console.log(recipeId, userId)
    const res = await fetch(`like/add/${recipeId}/${userId}`, {
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
   console.log('error in likeService: '+err)
  }
}

export const deleteLike = async (recipeId, userId) => {
    try{
      const res = await fetch(`like/remove/${recipeId}/${userId}`, {
          method: 'DELETE',
        });
        if (res.status !== 401)
          return res.json();
      }catch(err) {
        console.log('error in likeService: '+err)
      }
} 