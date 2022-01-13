const Language = require('../models/Language');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.list = async(req, res) => {
  try {
    const languages = await Language.find()
    await res.status(200).json(languages);
  } catch (err) {
    res.status(500).json({
      error: errorHandler(err)
    })
  }
}

exports.create = async (req, res) => {
  const language = new Language(req.body)
  try {
    await language.save()
    await res.status(200).json(language);
  } catch (err) {
    res.status(500).json({
    error: errorHandler(err)
  })
  }
}

exports.remove = async (req, res) => {
  try {
    await Language.findByIdAndDelete(req.params.id)
    await res.status(200).json({success : true});
    console.log('Language deleted');
  } catch (err) {
    res.status(500).json(err.name+': '+err.message)
    console.log(err.name+': '+err.message);
  }
}

exports.getRecipes = async(req, res) => {
  try {
  const language = await Language.findById(req.params.id).populate('recipes')
  await res.json(language.recipes)
}catch (err) {
  res.status(500).json(err.name+': '+err.message)
  console.log(err.name+': '+err.message);
}
}


