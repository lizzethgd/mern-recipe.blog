const express = require('express');
const router = express.Router();

const { list, create, remove, getRecipes } = require('../controllers/categoryController');

router.get('/list', list);
router.post('/create', create);
router.delete('/:id', remove)
router.get('/:id/recipes', getRecipes)

/* router.param('categoryId', categoryById); */


module.exports = router;