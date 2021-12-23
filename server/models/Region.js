const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema

const regionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      maxlength: 20,
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

module.exports = mongoose.model("Region", regionSchema);