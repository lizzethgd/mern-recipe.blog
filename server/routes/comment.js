const {Router} = require("express");
const router = Router()

const { add, remove, update, commentsByRecipe, commentsByUser } = require('../controllers/commentController');

router.post('/add', add)
router.get('/:recipeId', commentsByRecipe)
router.get('/:userId', commentsByUser)
router.put('/:id', update)
router.delete('/:id', remove)

module.exports = router;