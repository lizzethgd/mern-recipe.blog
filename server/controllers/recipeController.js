const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const Recipe = require('../models/Recipe');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.list = async (req, res) => {

    try { 
      const recipes = await Recipe.find()
      .populate('author', 'username')
      .populate('category', 'name')
      .populate('language', 'name')
      .populate('region', 'name')
      .populate('comments')
      .populate('likes', 'user')
    /*   .exec((err, recipes)) */
      await res.status(200).json(recipes);
      console.log(recipes.length)
   }catch (err) {
     res.status(500).json(err.name+': '+err.message)
     console.log(err.name+': '+err.message);
   }
}


exports.listfFiltered = async (req, res) => {

  console.log(req.params)
  const filters = {}
  if (req.params.categoryId!=="") {filters.category=req.params.categoryId }
  if (req.params.languageId!=="") {filters.language=req.params.languageId }
  if (req.params.regionId!=="") {filters.language=req.params.regionId }

  try { 
    const recipes = await Recipe.find({
      filters
    })
    .populate('author', 'username')
    .populate('category', 'name')
    .populate('language', 'name')
    .populate('region', 'name')
    .populate('comments')
    .populate('likes', 'user')
  /*   .exec((err, recipes)) */
    await res.status(200).json(recipes);
    console.log(recipes.length)
 }catch (err) {
   res.status(500).json(err.name+': '+err.message)
   console.log(err.name+': '+err.message);
 }

}

exports.read = async(req, res) => {
  try { 
    const recipe = await Recipe.findById(req.params.id)
    .populate('author', 'username')
    .populate('category', 'name')
    .populate('language', 'name')
    .populate('region', 'name')
    .populate('comments')
    .populate('likes', 'user')
    await res.status(200).json(recipe);
 }catch (err) {
   res.status(500).json(err.name+': '+err.message)
   console.log(err.name+': '+err.message);
 }
  /*req.recipe.photo = undefined;
  return res.json(req.recipe);*/
} 


/* 
exports.create = (req, res) => {
  const recipe = new Recipe(req.body)
  recipe.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      })
    }
    res.json({data});
  })
} */


exports.create = async (req, res) => {
  
  try {
    const recipe = new Recipe(req.body)
  /* let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, (err, fields, files) => {
    
    if (error) {
          return res.status(400).json({
          error: "Image could not be uploaded"
          })
    }
   const { title, description, serves, cookTime, ingredients, steps, author, category, language, region  } = fields */
    

    // 1KB = 1000 bytes
    // 1MB = 1,000,000 bytes 
    // 1 Byte = 8 bits

/*     if (files.photo) {
        if (files.photo.size > 1000000) {
        return res.status(400).json({
            error: "Image should be lass than 1MB in size"
        })
        }
        recipe.photo.data = fs.readFileSync(files.photo.path)
        recipe.photo.contentType = files.photo.type
    } */

   await recipe.save()
   await res.json(recipe);

  /* }) */
  }
catch(err) {
    res.status(500).json(err.name+': '+err.message)
    console.log(err.name+': '+err.message); 
  }
  
}

exports.remove = async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id)
    await res.status(200).json({success : true});
    console.log('Recipe deleted');
  } catch (err) {
    res.status(500).json(err.name+': '+err.message)
    console.log(err.name+': '+err.message);
  }
}

exports.update =  async (req, res) => {
  try {
    const updateRecipe = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body
    },{new: true})
    await res.status(200).json({success : true, recipe: updateRecipe});
  } catch (err) {
    res.status(500).json(err.name+': '+err.message)
    console.log(err.name+': '+err.message);
  }
}

exports.photo = (req, res, next ) => {
  if (req.recipe.photo.data) {
    res.set('Content-Type', req.recipe.photo.contentType)
    return res.send(req.recipe.photo.data)
  }
  next();
  }

exports.getRecipeComments = async (req, res) => {
    try { 
     const recipe = await Recipe.findById(req.params.id)
     await recipe.populate('comments')
    // await user.populated('recipes')
     await  res.status(200).json(recipe.comments);
  }catch (err) {
    res.status(500).json(err.name+': '+err.message)
    console.log(err.name+': '+err.message);
  }
}

exports.getRecipeLikes = async (req, res) => {
    try { 
     const recipe = await Recipe.findById(req.params.id)
     await recipe.populate('likes')
    // await user.populated('recipes')
     await  res.status(200).json(recipe.likes);
  }catch (err) {
    res.status(500).json(err.name+': '+err.message)
    console.log(err.name+': '+err.message);
  }
}

  
   