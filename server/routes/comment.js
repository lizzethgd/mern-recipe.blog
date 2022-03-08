const {Router} = require("express");
const router = Router()

const { create, remove, update, commentsByRecipe, commentsByUser } = require('../controllers/commentController');

router.post('/create/:userId/:recipeId', create)
router.get('/:recipeId', commentsByRecipe)
router.get('/:userId', commentsByUser)
router.put('/:id', update)
router.delete('/:id', remove)

module.exports = router;