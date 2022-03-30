export const addLike = async (like) => {
    try{
        console.log(like)
    const res = await fetch('like/add', {
       method: 'POST',
       body: JSON.stringify(like),
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

export const deleteLike = async (id) => {
    try{
      const res = await fetch(`like/${id}`, {
          method: 'DELETE',
        });
        if (res.status !== 401)
          return res.json();
      }catch(err) {
        console.log('error in likeService: '+err)
      }
} 