const {Router} = require("express");
const router = Router()

const {add, remove, favoritesByUser} = require('../controllers/favoriteController');

router.put('/add/:recipeId/:userId', add)
router.delete('/remove/:recipeId/:userId', remove)
router.get('/:userId', favoritesByUser)



module.exports = router;