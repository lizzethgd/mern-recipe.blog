const {Router} = require("express");
const router = Router()
const imageUpload = require('../middelwares/imageUpload')

const { list, listfFiltered, read, create, remove, update, recipeById, recipesSearch, recipesByUser, photo } = require('../controllers/recipeController');

// list 
router.get('/recipes', list);
router.get('/recipes/:category/:language/:region', listfFiltered);
router.get('/recipes/:search', recipesSearch);
router.post('/create', imageUpload, create)
router.get('/:id', recipeById)
router.get('/author/:id', recipesByUser)
router.delete('/:id', remove)
router.get('/photo/:id', photo)
router.put('/:id', imageUpload, update)

module.exports = router;
