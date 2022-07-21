const {Router} = require("express");
const router = Router()
const {fileUpload,  resizeImage, deleteImage} = require('../middelwares/cloudinary')
const { list, listfFiltered, read, create, remove, update, recipeById, recipesSearch, recipesByUser } = require('../controllers/recipeController');

router.get('/recipes', list);
router.get('/recipes/:language/:category/:region', listfFiltered);
router.get('/recipes/:search', recipesSearch);
router.post('/create', fileUpload, resizeImage, create)
router.get('/:id', recipeById)
router.get('/author/:userId', recipesByUser)
router.delete('/:id', remove)
router.put('/photo', deleteImage)
router.put('/:id', fileUpload, resizeImage, update)

module.exports = router;
