const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema

const favoriteSchema =new mongoose.Schema(
{     
 recipe: {
    type: ObjectId,
    ref: 'Recipe',
    require: true
 },  
 user: {
    type: ObjectId,
    ref: 'User',
    require: true
}  
}, 
{ timestamps: true }
);
  
module.exports = mongoose.model("Favorite", favoriteSchema)