const JWT = require('jsonwebtoken')
const User = require("../models/User");
const _= process.env
const DBError = require('../utils/DBError')

exports.register = async (req,res) => {
  const {username, email, password,  profilePic, role, firstName, lastName} = req.body

  try { 
    const newUser = new User({
      username,
      email,
      password: await User.encryptPassword(password),
      profilePic,
      role, 
      firstName,
      lastName
    });

    await newUser.save();

    const token = JWT.sign({ id: newUser._id }, _.JWT_SECRET, {
      expiresIn: _.JWT_EXPIRES, // 24 hours
    });
    console.log(newUser)
    return res.status(200).json({ token });
   
    
  }catch (err) {
  console.log(err.name+': '+err.message )
  let errorHandled = err
  err.name==='MongoError' ? errorHandled = DBError(err) : errorHandled
  res.status(401).json(errorHandled.message)
  }
}


exports.login = async (req, res) => {

  try {
    const user = await User.findById(req.userId);

    console.log('el user: '+user)

    const {_id, username, role} = user

    const token = JWT.sign({ id: _id },_.JWT_SECRET, {
        expiresIn: _.JWT_EXPIRES // 24 hours
      });

     //await res.setHeader('x-access-token', token) 
    await res.cookie('lizzethJWT', token, {httpOnly: true, sameSite:true})     
    
     await res.status(200).json({isAuthenticated : true, user : {username, role}});
     
     console.log("LOGIN!!!!!!!!!!");
  
  } catch (err) {
      console.log(err.name+': '+err.message);
  }

}


exports.logout = async (req, res) => {
  //console.log(req.headers["x-access-token"])
    //await req.headers["x-access-token"] = '';  
    await res.clearCookie('lizzethJWT');
    await res.json({user:{username : "", role : ""},success : true})
    console.log("LOGOUT!!!!!!!!!!");
}


exports.update = async (req, res) => {
  if (req.body.password) req.body.password = await User.encryptPassword(req.body.password)
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body
    },{new: true})
    await res.status(200).json({success : true, user: updateUser});
  } catch (err) {
    res.status(500).json(err.name+': '+err.message)
    console.log(err.name+': '+err.message);
  }
}


exports.delete = async(req, res) => {
  //console.log(req.headers["x-access-token"])
    //await req.headers["x-access-token"] = '';  
    try {
    await User.findByIdAndDelete(req.params.id)
    await res.status(200).json({success : true});
    console.log('User Deleted');
  } catch (err) {
    res.status(500).json(err.name+': '+err.message)
    console.log(err.name+': '+err.message);
  }
}

exports.getMyProfile = async(req, res) => {
  try {
    const user =  await User.findOne({username: req.params.username})
    await user.populate('recipes')
    await user.populate('favorites', 'recipe')
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

/*  exports.userById = (req, res, next, id) => {
  User.findById(id).
  populate('recipe')
  exec((err,user) => {
    if(err||!user) {
      return res.status(400).json({
        error: "User not found"
      });
    }
    req.user = user;
    next()
  });
}  */