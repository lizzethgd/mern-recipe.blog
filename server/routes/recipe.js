const {Router} = require("express");
const router = Router()
const imageUpload = require('../middelwares/imageUpload')
const { list, listfFiltered, read, create, remove, update, recipeById, photo } = require('../controllers/recipeController');

// list 
router.get('/recipes', list);
router.get('/recipes/:categoryId/:languageId/:regionId', listfFiltered);
router.post('/create', imageUpload, create)
router.get('/:id', recipeById)
router.delete('/:id', remove)
router.get('/photo/:id', photo)
router.put('/update/:id', imageUpload, update)
//router.param("id", recipeById);

module.exports = router;
