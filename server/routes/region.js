const {Router} = require("express");
const router = Router()
const {userById} = require('../controllers/authController');

const { list, create, remove, getRecipes } = require('../controllers/regionController');

router.get('/list', list);
router.post('/create', create);
router.delete('/:id/', remove);
router.get('/:id/recipes', getRecipes);


module.exports = router;