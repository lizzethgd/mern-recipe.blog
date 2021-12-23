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

exports.remove = (req, res) => {
  let category = req.category
  category.remove((err, data) => {
    if(err) {
      return res.status(400).json({
        error: errorHandler(err)
      })
    }
    res.json({
      message: "Category succesfully deleted"
    })
  })
}

exports.categoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err || !category) {
      return res.status(400).json({
        error: "Category does not exist"
      });
    }
    req.category = category;
    next();
  })
}