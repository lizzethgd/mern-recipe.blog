export const addFavorite = async (favorite) => {
    try{
        console.log(favorite)
    const res = await fetch('favorite/add', {
       method: 'POST',
       body: JSON.stringify(favorite),
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

export const deleteFavorite = async (id) => {
    try{
      const res = await fetch(`favorite/${id}`, {
          method: 'DELETE',
        });
        if (res.status !== 401)
          return res.json();
      }catch(err) {
        console.log('error in favoriteService: '+err)
      }
} 