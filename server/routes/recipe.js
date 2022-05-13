const {Router} = require("express");
const router = Router()
//const recipeImgUpload = require('../middelwares/recipeImgUpload')
const {upload, resizeImage} = require('../middelwares/recipeImgUpload')

const { list, listfFiltered, read, create, remove, update, recipeById, recipesSearch, recipesByUser, photo } = require('../controllers/recipeController');

// list 
router.get('/recipes', list);
router.get('/recipes/:category/:language/:region', listfFiltered);
router.get('/recipes/:search', recipesSearch);
router.post('/create', upload.single('photo'), resizeImage, create)
router.get('/:id', recipeById)
router.get('/author/:id', recipesByUser)
router.delete('/:id', remove)
router.get('/photo/:id', photo)
router.put('/:id', upload.single('photo'), update)

module.exports = router;
