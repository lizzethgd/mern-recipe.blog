export const updateProfile = async (updateUser, id) => {
    try{
    const res = await fetch(`user/${id}`, {
        method: 'PUT',
        body: updateUser,
      });
      if (res.status !== 401)
        return res.json();
      else
        return { isAuthenticated: false, user: { } }; 
    }catch(err) {
      console.log('error in userService: '+err)
    }
  }


  export const profile = async (user) => {

      const {username/* , role */ } = user
      console.log(username)
    try{
      const res = await fetch(`user/profile/${username}`)
      return res.json()
    }catch(err) {
        console.log('error in userService: '+err)
      }
    
    }


