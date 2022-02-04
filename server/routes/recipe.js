const {Router} = require("express");
const router = Router()

const { list, listfFiltered, read, create, remove, update, recipeById, photo } = require('../controllers/recipeController');

// list 
//router.get('/recipes', list);
router.get('/recipes/:categoryId/:languageId/:regionId', listfFiltered);
router.post('/create/:userId', create)
router.get('/:id', read)
router.delete('/:id', remove)
router.get('/photo/:id', photo)
router.put('/:id', update)

/* router.param("recipeId", recipeById); */

module.exports = router;
