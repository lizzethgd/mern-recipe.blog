const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      maxlength: 32,
      trim: true, 
      unique: true
    },
    recipes: [
      { type: ObjectId, 
        ref: 'Recipe' }
    ]  
  },
  {timestamps: true, versionKey: false}
);

module.exports = mongoose.model("Category", categorySchema);