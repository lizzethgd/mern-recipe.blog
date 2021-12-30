const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true, 
      maxlength: 32,
      unique: true
    }
  },
  {timestamps: true, 
    versionKey: false,  
    toJSON: {virtuals: true}, 
    toObject: { virtuals: true } 
  }
)

languageSchema.virtual('recipes', {
  ref: 'Recipe',
  localField: '_id',
  foreignField: 'language'
}); 


module.exports = mongoose.model("Language", languageSchema);