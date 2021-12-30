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

exports.remove = (req, res) => {
  let region = req.region
  region.remove((err, data) => {
    if(err) {
      return res.status(400).json({
        error: errorHandler(err)
      })
    }
    res.json({
      message: "Region succesfully deleted"
    })
  })
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

/* exports.regionById = (req, res, next, id) => {
 Region.findById(id).exec((err, region) => {
    if (err || !region) {
      return res.status(400).json({
        error: "Region does not exist"
      });
    }
    req.region = region;
    next();
  })
} */

