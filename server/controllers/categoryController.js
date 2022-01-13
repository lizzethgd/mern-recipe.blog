const Category = require('../models/Category');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.list = async (req, res) => {
  try {
    const categories = await Category.find()
    await res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({
      error: errorHandler(err)
    })
  }
}

exports.create = async (req, res) => {
  const category = new Category(req.body)
  try {
    await category.save()
    await res.status(200).json(category);
  } catch (err) {
    res.status(500).json({
    error: errorHandler(err)
  })
  }
}

exports.remove = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id)
    await res.status(200).json({success : true});
    console.log('Category deleted');
  } catch (err) {
    res.status(500).json(err.name+': '+err.message)
    console.log(err.name+': '+err.message);
  }

}

exports.getRecipes = async(req, res) => {
  try {
  const category = await Category.findById(req.params.id).populate('recipes')
  await res.json(category.recipes)
}catch (err) {
  res.status(500).json(err.name+': '+err.message)
  console.log(err.name+': '+err.message);
}
}


