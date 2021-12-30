const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      maxlength: 32,
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

categorySchema.virtual('recipes', {
  ref: 'Recipe',
  localField: '_id',
  foreignField: 'category'
}); 

module.exports = mongoose.model("Category", categorySchema);