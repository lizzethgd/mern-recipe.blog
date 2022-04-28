const Recipe = require('../models/Recipe');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.list = async (req, res) => {
  try { 
    const recipes = await Recipe.find()
    .populate('author', { password:0, email:0, role:0, updatedAt:0 })
    .populate('category', 'name')
    .populate('language', 'name')
    .populate('region', 'name')
    /*   .exec((err, recipes)) */
    await res.status(200).json(recipes);
    console.log(recipes.length)
   }catch (err) {
     res.status(500).json(err.name+': '+err.message)
     console.log(err.name+': '+err.message);
   }
}

exports.recipesByUser = async(req, res) => {
  try { 
  const recipes = await Recipe.find({author: req.params.id})
  .populate('author')
  .populate('category', 'name')
  .populate('language', 'name')
  .populate('region', 'name')
  //.populate('likes', 'user')
  //.populate('favorites', 'user')
  /* req.recipe = recipe;
    next(); */
    console.log(recipes) 
  await res.status(200).json(recipes);
  }catch (err) {
  res.status(500).json(err.name+': '+err.message)
  console.log(err.name+': '+err.message);
  }
} 

exports.listfFiltered = async (req, res) => {
    console.log('params')
    console.log(req.params)
    const filters = {}
    if (req.params.category!=='ND') {filters.category=req.params.category}
    if (req.params.language!=='ND') {filters.language=req.params.language }
    if (req.params.region!=='ND') {filters.region=req.params.region } 

    try { 
    const recipes = await Recipe.find(filters)
    .populate('author')
    .populate('category', 'name')
    .populate('language', 'name')
    .populate('region', 'name')
    await res.status(200).json(recipes);
    console.log(filters)
    console.log(recipes.length)
  }catch (err) {
    res.status(500).json(err.name+': '+err.message)
    console.log(err.name+': '+err.message);
  }

}

exports.create = async (req, res) => {
  try {
    if (req.file) req.body.photo='imgUploads/'+req.file.filename 
      console.log(req.body)
    const newRecipe = await new Recipe(req.body)
      await newRecipe.save();
      await res.status(200).json({success : true, recipe: newRecipe})
  }catch(err) {
    res.status(500).json('error controller: '+err)
    console.log('error in controller '+err)
  }
} 

exports.update =  async (req, res) => {
  try {
    if (req.file) req.body.photo='imgUploads/'+req.file.filename
    console.log('elbody')
  console.log(req.body)
    const updateRecipe = await Recipe.findByIdAndUpdate(req.params.id, {
      $set: req.body
    },{new: true})
    await res.status(200).json({success : true, recipe: updateRecipe});
  } catch (err) {
    res.status(500).json('error controller: '+err)
    console.log('error controller: '+err);
  }
}

exports.remove = async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id)
    await res.status(200).json({success : true});
    console.log('Recipe succesfully deleted');
  } catch (err) {
    res.status(500).json(err.name+': '+err.message)
    console.log(err.name+': '+err.message);
  }
}

exports.recipeById = async(req, res) => {
  try { 
  const recipe = await Recipe.findById(req.params.id)
  .populate('author')
  .populate('category', 'name')
  .populate('language', 'name')
  .populate('region', 'name')
  //.populate('likes', 'user')
  //.populate('favorites', 'user')
  /* req.recipe = recipe;
    next(); */
    console.log(recipe) 
  await res.status(200).json(recipe);
  }catch (err) {
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
  
