const Region = require('../models/Region');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.list = async(req, res) => {
  try {
    const regions = await Region.find()
    await res.status(200).json(regions);
  } catch (err) {
    res.status(500).json({
      error: errorHandler(err)
    })
  }
}

exports.create = async (req, res) => {
  const region = new Region(req.body)
  try {
    await region.save()
    await res.status(200).json(region);
  } catch (err) {
    res.status(500).json({
    error: errorHandler(err)
  })
  }
}

exports.remove = async (req, res) => {
  try {
    await Region.findByIdAndDelete(req.params.id)
    await res.status(200).json({success : true});
    console.log('Region deleted');
  } catch (err) {
    res.status(500).json(err.name+': '+err.message)
    console.log(err.name+': '+err.message);
  }
}

exports.getRecipes = async(req, res) => {
  try {
  const region = await Region.findById(req.params.id).populate('recipes')
  await res.json(region.recipes)
}catch (err) {
  res.status(500).json(err.name+': '+err.message)
  console.log(err.name+': '+err.message);
}
}



