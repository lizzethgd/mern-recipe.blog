const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema

const commentSchema =new mongoose.Schema(
{     
 content: {
    type: String,
    require: true,
    maxlength: 2000,
    trim: true, 
    unique: true
 },
 recipe: {
    type: ObjectId,
    ref: 'Recipe',
    require: true
 },  
 author: {
    type: ObjectId,
    ref: 'User',
    require: true
}
}, 
{ timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
        
