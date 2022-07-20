const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true, 
      require: true,
      maxlength: 32,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 1000
    },
    serves: {
      type: Number,
      trim: true,
      maxlength: 3,
    },
    cookTime:{
        type: Array,
        trim: true, 
    },
    photo: {
      type: String,
    },
    ingredients: {
        type: Array,
        trim: true,
        require: true,
        default: [],
        maxlength: 2000
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
    likes: [],
    favorites: []
}, 
 {  timestamps: true, 
    versionKey: false, 
    autoIndex: false,
    toJSON: {virtuals: true}, 
    toObject: { virtuals: true },
    //mappings: {dynamic: true } 
  }
);

module.exports = mongoose.model("Recipe", recipeSchema);


