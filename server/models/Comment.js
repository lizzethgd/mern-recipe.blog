const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema

const commentSchema =new mongoose.Schema(
{     
 content: {
    type: String,
    trim: true,
    require: true,
    maxlength: 2000,
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
{ timestamps: true,
versionKey: false }
);

module.exports = mongoose.model("Comment", commentSchema);
        
