const {Router} = require("express");
const router = Router()

const { add, remove, likeByUser} = require('../controllers/likeController');

router.post('/add', add)
router.delete('/:id', remove)
router.get('/:userId/:recipeId', likeByUser)

module.exports = router;