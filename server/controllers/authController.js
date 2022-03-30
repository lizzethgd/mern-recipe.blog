const JWT = require('jsonwebtoken')
const User = require("../models/User");
const _= process.env
//const imageUpload = require('../middelwares/imageUpload')

exports.register = async (req,res) => {
  const {username, email, password,  photo, role, firstName, lastName} = req.body

  try { 
    const newUser = new User({
      username,
      email,
      password: await User.encryptPassword(password),
      photo,
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
   
    
  } catch (err) {
  console.log(err.name+': '+err.message )
  let errorHandled = err
  err.name==='MongoError' ? errorHandled = DBError(err) : errorHandled
  res.status(401).json(errorHandled.message)
  }
}

exports.login = async (req, res) => {

  try {
    const user = req.user

    console.log('login: '+user)

    //const {_id, username, role} = user

    const token = JWT.sign({ id: user._id },_.JWT_SECRET, {
        expiresIn: _.JWT_EXPIRES // 24 hours
      });

     //await res.setHeader('x-access-token', token) 
    await res.cookie('lizzethJWT', token
    //, {httpOnly: true, sameSite:true}
    )     
    
    //await res.status(200).json({isAuthenticated : true, user : {username, role}});

    await res.status(200).json({isAuthenticated : true, user : user}); 
     
     console.log("LOGIN!!!!!!!!!!");
  
  } catch (err) {
      console.log(err.name+': '+err.message);
  }

}

exports.logout = async (req, res) => {
  //console.log(req.headers["x-access-token"])
    //await req.headers["x-access-token"] = '';  
    await res.clearCookie('lizzethJWT');
    await res.json({user: {}, success : true})
    console.log("LOGOUT!!!!!!!!!!");
}

exports.update = async (req, res) => {
  console.log('elbody')
  console.log(req.body)
  try {
  if (req.body.password) req.body.password = await User.encryptPassword(req.body.password)  
  if (req.file) 
  { console.log(req.file)
    req.body.photo='imgUploads/'+req.file.filename}
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
    const username = req.params.username
    const user =  await User.findOne({username})
    user.password= null
    await user.populate('recipes')
    await user.populate('favorites')
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
