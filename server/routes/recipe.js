const {Router} = require("express");
const router = Router()

const { list, read, create, remove, recipeById, photo } = require('../controllers/recipeController');

// list 
router.get('/recipes', list);
router.post('/create/:userId', create)
router.get('/:recipeId', read)
router.delete('/:recipeId', remove)
router.get('/photo/:recipeId', photo)

router.param("recipeId", recipeById);

module.exports = router;
