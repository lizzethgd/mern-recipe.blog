exports.getMyProfile = async(req, res) => {
    try {
      const username = req.params.username
      const user =  await User.findOne({username})
      user.password= null
      //await user.populate('recipes')
      //await user.populate('favorites')
      await res.status(200).json(user)
    } catch (err) {
      res.status(500).json(err.name+': '+err.message)
      console.log(err.name+': '+err.message);
    }
}
  
exports.getUserById = async(req, res) => {
    try {
      const user =  await User.findById(req.params.id)
      user.password= null
      user.email= null
      await user.populate('recipes')
      await res.status(200).json(user)
    } catch (err) {
      res.status(500).json(err.name+': '+err.message)
      console.log(err.name+': '+err.message);
    }
}
  
exports.getUserRecipes = async (req, res) => {
    try { 
     const user = await User.findById(req.params.id)
     await user.populate('recipes')
    // await user.populated('recipes')
     await  res.status(200).json(user.recipes);
    }catch (err) {
    res.status(500).json(err.name+': '+err.message)
    console.log(err.name+': '+err.message);
    }
}
  
exports.getUserFavorites = async (req, res) => {
    try { 
     const user = await User.findById(req.params.id)
     await user.populate('favorites')
    // await user.populated('recipes')
     await  res.status(200).json(user.favorites);
    }catch (err) {
    res.status(500).json(err.name+': '+err.message)
    console.log(err.name+': '+err.message);
    }
}