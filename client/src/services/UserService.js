export default {

  updateProfile : async (updateUser) => {
    console.log(updateUser)
    const res = await fetch(`user/update/${updateUser._id}`, {
        method: 'PUT',
        body: JSON.stringify(updateUser),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (res.status !== 401)
        return res.json();
      else
        return { isAuthenticated: false, user: { } };
  }
,

  profile : async user => {

      const {username, role } = user
      console.log(username)
    try{
      const res = await fetch(`user/profile/${username}`)
      return res.json()
    }catch(err) {
        console.log(err)
      }
    
    }

}

