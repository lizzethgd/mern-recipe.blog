const {Router} = require("express");
const router = Router()

const { add, remove} = require('../controllers/likeController');

router.put('/add/:recipeId/:userId', add)
router.delete('/remove/:recipeId/:userId', remove)

module.exports = router;