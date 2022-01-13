const {Router} = require("express");
const router = Router()

const { create, remove, update } = require('../controllers/commentController');

router.post('/create/:userId/:recipeId', create)
router.put('/:id', update)
router.delete('/:id', remove)

module.exports = router;