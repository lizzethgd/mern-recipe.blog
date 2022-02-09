export default {

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

