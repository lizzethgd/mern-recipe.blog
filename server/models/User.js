const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { ObjectId } = mongoose.Schema


const userSchema = new mongoose.Schema(
{
  username :{
    type : String,
    required: [true, "User is required"],
    lowercase: true,
    unique: true,
    minlength : 4,
    maxlength : 15
  },
  email: {
    type: String,
    require: true,
    minlength : 10,
    maxlength: 20,
    unique: true
  },
  password: { 
    type: String,
    required: [true, "Password is required"],
    minlength : 6
  },
  profilePic: {
    data: Buffer,
    contentType: String
  },
  role: {
    type : String,
    enum: {
        values: ["guest", "user", "moredator", "admin"],
      },
    default: "user",
  },
  firstName: {
    type: String,
    maxlength: 20
  },
  lastName:{
    type: String,
    maxlength: 20
  },
  recipes: [
    { type: ObjectId, 
      ref: 'Recipe' }
  ]
},
{timestamps: true, versionKey: false}
);

// virtual field for password hash
userSchema.statics.encryptPassword = async (password) => {
  return await bcrypt.hash(password, 10);
}    

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
}

module.exports = mongoose.model('User', userSchema);