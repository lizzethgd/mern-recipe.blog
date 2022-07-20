const express = require('express');
const router = express.Router();
const {userById} = require('../controllers/authController');

const { list, getLang, create, remove, getRecipes } = require('../controllers/languageController');

router.get('/list', list);
router.get('/:code', getLang);
router.post('/create', create);
router.delete('/:id', remove)
router.get('/:id/recipes', getRecipes)

/* router.param('languageId', languageById);
router.param('userId', userById); */

module.exports = router;