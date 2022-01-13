const {Router} = require("express");
const router = Router()

const { list, read, create, remove, update, recipeById, photo } = require('../controllers/recipeController');

// list 
router.get('/recipes', list);
router.post('/create/:userId', create)
router.get('/:id', read)
router.delete('/:id', remove)
router.get('/photo/:id', photo)
router.put('/:id', update)

/* router.param("recipeId", recipeById); */

module.exports = router;
