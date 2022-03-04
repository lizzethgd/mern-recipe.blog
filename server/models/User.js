const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    maxlength: 40,
    unique: true
  },
  password: { 
    type: String,
    required: [true, "Password is required"],
    minlength : 6
  },
  photo: {
    type: String,
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
    maxlength: 40
  },
  lastName:{
    type: String,
    maxlength: 40
  }
}, 
{timestamps: true, 
  versionKey: false,  
  toJSON: {virtuals: true}, 
  toObject: { virtuals: true } 
}
);

// virtual field for password hash
userSchema.statics.encryptPassword = async (password) => {
  return await bcrypt.hash(password, 10);
}    

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
}

userSchema.virtual('recipes', {
  ref: 'Recipe',
  localField: '_id',
  foreignField: 'author'
}); 

userSchema.virtual('favorites', {
  ref: 'Favorite',
  localField: '_id',
  foreignField: 'user'
}); 

module.exports = mongoose.model('User', userSchema);