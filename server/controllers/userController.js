const User = require('../models/User');

exports.update = async (req, res) => {
  console.log('req.body in user controlled: ')
  console.log(req.body)
  try {
    if (req.body.password) req.body.password = await User.encryptPassword(req.body.password)  
    const updateUser = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body
    },{new: true})
    const resUser =   await User.findById(updateUser._id, { password: 0 });
    await res.status(200).json({success : true, user: resUser});
  } catch (err) {
    res.status(500).json('error controller: '+err)
    console.log('error controller: '+err);
  }
}

exports.getMyProfile = async(req, res) => {
  try {
    const user =  await User.findById(req.params.id)
    user.password= null
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