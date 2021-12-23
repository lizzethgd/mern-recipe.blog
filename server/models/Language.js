const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema

const languageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true, 
      maxlength: 32,
      unique: true
    },
    recipes: [
      { type: ObjectId, 
        ref: 'Recipe' }
    ]
  },
  {timestamps: true, versionKey: false}
);

module.exports = mongoose.model("Language", languageSchema);