const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true, 
      requrie: true,
      maxlength: 32,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 500
    },
    serves: {
      type: Number,
      trim: true,
      maxlength: 3,
    },
    cookTime:{
        type: Array,
        trim: true, 
        default: []
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    ingredients: {
        type: Array,
        trim: true,
        require: true,
        default: []
      },
    steps: {
        type: Array,
        trim: true,
        require: true,
        default: []
      },
    author: {
        type: ObjectId,
        ref: 'User',
        require: true
      }, 
    category: {
        type: ObjectId,
        ref: 'Category',
        require: true
      },  
    language: {
        type: ObjectId,
        ref: 'Language',
        require: true
      },
    region: {
      type: ObjectId,
      ref: 'Region',
      require: true
    },
    
  },
  {timestamps: true, versionKey: false}
);

module.exports = mongoose.model("Recipe", recipeSchema);