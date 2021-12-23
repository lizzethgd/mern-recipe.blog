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

exports.remove = (req, res) => {
  let Language = req.language
  Language.remove((err, data) => {
    if(err) {
      return res.status(400).json({
        error: errorHandler(err)
      })
    }
    res.json({
      message: "Language succesfully deleted"
    })
  })
}

exports.languageById = (req, res, next, id) => {
  Language.findById(id).exec((err, language) => {
    if (err || !language) {
      return res.status(400).json({
        error: "Language does not exist"
      });
    }
    req.language = Language;
    next();
  })
}

