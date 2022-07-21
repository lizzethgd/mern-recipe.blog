const Recipe = require('../models/Recipe');
const Language = require('../models/Language');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.list = async (req, res) => {
  try { 
    const recipes = await Recipe.find({language: 'en'})
    .populate('author', { password:0, email:0, updatedAt:0 })
    .populate('language', 'name')
    .populate('category', 'name')
    .populate('region', 'name')
    await res.status(200).json(recipes);
    console.log(recipes.length)
   }catch (err) {
     res.status(500).json(err.name+': '+err.message)
     console.log(err.name+': '+err.message);
   }
}

exports.recipesByUser = async(req, res) => {
  try { 
  const recipes = await Recipe.find({author: req.params.userId})
  .populate('author', { password:0, email:0, updatedAt:0 })
  .populate('language', 'name')
  .populate('category', 'name')
  .populate('region', 'name')
    console.log(recipes) 
  await res.status(200).json({
    recipes: recipes,
    total: recipes.length 
  });
  }catch (err) {
  res.status(500).json(err.name+': '+err.message)
  console.log(err.name+': '+err.message);
  }
} 

exports.listfFiltered = async (req, res) => {
    const filters = {}
    const language = await Language.findOne({code: req.params.language})
    filters.language = language.id
    if (req.params.category!=='ND') {filters.category=req.params.category}
    if (req.params.region!=='ND') {filters.region=req.params.region } 

    try { 
    const recipes = await Recipe.find(filters)
    .populate('author', { password:0, email:0, updatedAt:0 })
     .populate('language', 'name')
    .populate('category', 'name')
    .populate('region', 'name')
    await res.status(200).json({
      recipes: recipes,
      total: recipes.length 
    });
    console.log(filters)
  }catch (err) {
    res.status(500).json(err.name+': '+err.message)
    console.log(err.name+': '+err.message);
  }

}

exports.recipesSearch = async(req, res) => {
  const search = req.params.search
  try {
    const recipes= await Recipe.find({$or: [{ title : { $regex: search }}, { title : { $regex: search }}, { description : { $regex: search }}, { ingredients : { $regex: search }}, { steps : { $regex: search }}]})
    .populate('author', { password:0, email:0, updatedAt:0 })
    .populate('language', 'name')
    .populate('category', 'name')
    .populate('region', 'name')
    await res.status(200).json({
      recipes: recipes,
      total: recipes.length 
    });
  }catch (err) {
    res.status(500).json(err.name+': '+err.message)
    console.log(err.name+': '+err.message);
  }
}

exports.create = async (req, res) => {
  try { 
    console.log('req.body in recipe controlled: ')
    console.log(req.body)
    const newRecipe = await new Recipe(req.body)
    await newRecipe.save();
    await res.status(200).json({success : true, recipe: newRecipe, id: newRecipe._id})
  }catch(err) {
    res.status(500).json('error controller: '+err)
    console.log('error in controller '+err)
  }
} 

exports.update =  async (req, res) => {
  try {
    const updateRecipe = await Recipe.findByIdAndUpdate(req.params.id, {
      $set: req.body
    },{new: true})
    await res.status(200).json({success : true, recipe: updateRecipe, id: updateRecipe._id });
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
    .populate('author', { password:0, email:0, updatedAt:0 })
    .populate('language', 'name')
    .populate('category', 'name')
    .populate('region', 'name')
    await res.status(200).json(recipe);
  }catch (err) {
    res.status(500).json(err.name+': '+err.message)
    console.log(err.name+': '+err.message);
  }
} 

  
