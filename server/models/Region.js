const mongoose = require('mongoose');

const regionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      maxlength: 20,
      trim: true, 
      unique: true
    }
  },
  {timestamps: true, 
    versionKey: false,  
    toJSON: {virtuals: true}, 
    toObject: { virtuals: true } 
  }
);

regionSchema.virtual('recipes', {
  ref: 'Recipe',
  localField: '_id',
  foreignField: 'region'
}); 

module.exports = mongoose.model("Region", regionSchema);