const JWT = require('jsonwebtoken')
const User = require("../models/User");
const _= process.env

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
    const user = await User.findById(req.userId);

    console.log('login: '+user)

    const token = JWT.sign({ id: user._id },_.JWT_SECRET, {
        expiresIn: _.JWT_EXPIRES // 24 hours
    }); 

    //await res.setHeader('Authorization', token
    await res.cookie('RecipePadJWT', token, {httpOnly: true, sameSite:true})     

    await res.status(200).json({isAuthenticated : true, user : user}); 
     
     console.log("LOGIN!!!!!!!!!!");
  
  } catch (err) {
      console.log(err.name+': '+err.message);
  }

}

exports.logout = async (req, res) => {

    //await res.setHeader('Authorization', '')
    //await req.headers["x-access-token"] = '';
    await res.clearCookie('RecipePadJWT');  
    await res.json({user: {}, success : true})
    console.log("LOGOUT!!!!!!!!!!");
}

exports.delete = async(req, res) => {

  try {
    await User.findByIdAndDelete(req.params.id)
    await res.status(200).json({success : true});
    console.log('User Deleted');
  } catch (err) {
    res.status(500).json(err.name+': '+err.message)
    console.log(err.name+': '+err.message);
  }
}