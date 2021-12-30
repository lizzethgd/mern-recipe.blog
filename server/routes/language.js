const express = require('express');
const router = express.Router();
const {userById} = require('../controllers/authController');

const { list, create, remove, getRecipes } = require('../controllers/languageController');

router.get('/languages', list);
router.post('/create', create);
router.delete('/:id/', remove)
router.get('/:id/recipes', getRecipes)

/* router.param('languageId', languageById);
router.param('userId', userById); */

module.exports = router;