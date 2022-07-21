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


  export const getMyProfile = async (id) => {
    try{
      const res = await fetch(`user/myprofile/${id}`)
      return res.json()
    }catch(err) {
        console.log('error in userService: '+err)
      }
    
    }

    export const removePhoto = async (photoURL) => {
      const photo = {url : photoURL}
      try{
        const res = await fetch('user/remove/photo', {
            method: 'PUT',
            body: JSON.stringify(photo),
            headers: {
              "Content-Type": "application/json"
            }
          });
            return await res.json();
        }catch(err) {
          console.log('error in userService photo: '+err)
        }
    }
