const {Router} = require("express");
const router = Router()
const {fileUpload,  resizeImage} = require('../middelwares/resizedUpload')
const { list, listfFiltered, read, create, remove, update, recipeById, recipesSearch, recipesByUser, photo } = require('../controllers/recipeController');

router.get('/recipes', list);
router.get('/recipes/:category/:language/:region', listfFiltered);
router.get('/recipes/:search', recipesSearch);
router.post('/create', fileUpload, resizeImage, create)
router.get('/recipe/:id', recipeById)
router.get('/author/:id', recipesByUser)
router.delete('/:id', remove)
router.get('/photo/:id', photo)
router.put('/:id', fileUpload, resizeImage, update)

module.exports = router;
