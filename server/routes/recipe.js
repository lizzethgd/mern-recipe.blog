const {Router} = require("express");
const router = Router()
const imageUpload = require('../middelwares/imageUpload')

const { list, listfFiltered, read, create, remove, update, recipeById, recipesByUser, photo } = require('../controllers/recipeController');

// list 
router.get('/recipes', list);
router.get('/recipes/:categoryId/:languageId/:regionId', listfFiltered);
router.post('/create', imageUpload, create)
router.get('/:id', recipeById)
router.get('/author/:id', recipesByUser)
//router.get('/favorites/:userId', recipesByUser)
router.delete('/:id', remove)
router.get('/photo/:id', photo)
router.put('/:id', imageUpload, update)
//router.put('/like/:id/:userId', addLike)
//router.param("id", recipeById);

module.exports = router;
