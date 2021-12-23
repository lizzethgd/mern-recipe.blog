const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const Recipe = require('../models/Recipe');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : 'asc'
  let sortBy = req.query.sortBy ? req.query.sortBy : 'name'
  
  Recipe.find()
    .select("-photo")
    .populate('category')
    .sort([[sortBy, order]])
    .exec((err, recipes) => {
      if (err) {
        return res.status(400).json({
          error: "Recipes not found"
        })
      }
      res.json(recipes);
    })
}

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
}

exports.read = (req, res) => {
  req.recipe.photo = undefined;
  return res.json(req.recipe);
}

exports.create = (req, res) => {
  
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, (err, fields, files) => {
    
    if (err) {
          return res.status(400).json({
          error: "Image could not be uploaded"
          })
    }

    const { title, description, serves, cookTime, ingredients, steps, author, category, langaguage, region  } = fields
    let recipe = new Recipe(fields);

    // 1KB = 1000 bytes
    // 1MB = 1,000,000 bytes 
    // 1 Byte = 8 bits

    if (files.photo) {
        if (files.photo.size > 1000000) {
        return res.status(400).json({
            error: "Image should be lass than 1MB in size"
        })
        }
        recipe.photo.data = fs.readFileSync(files.photo.path)
        recipe.photo.contentType = files.photo.type
    }

    recipe.save((err, result) => {
        if (err) {
        return res.status(400).json({
            error: errorHandler(error)
        })
        }
        res.json(result);
    })

  })
}

exports.remove = (req, res) => {
  let recipe = req.recipe
  recipe.remove((err, data) => {
    if(err) {
      return res.status(400).json({
        error: errorHandler(err)
      })
    }
    res.json({
      message: "Recipe succesfully deleted"
    })
  })
}

exports.recipeById = (req, res, next, id) => {
  Recipe.findById(id)
  .populate("category")
  .exec((err, recipe) => {
    if (err || !recipe) {
      return res.status(400).json({
        error: "Recipe not found"
      });
    }
    req.recipe = recipe;
    next();
  })
}

exports.photo = (req, res, next ) => {
  if (req.recipe.photo.data) {
    res.set('Content-Type', req.recipe.photo.contentType)
    return res.send(req.recipe.photo.data)
  }
  next();
  }