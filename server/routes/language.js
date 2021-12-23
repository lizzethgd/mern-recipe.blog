const express = require('express');
const router = express.Router();
const {userById} = require('../controllers/authController');

const { list, create, remove, languageById } = require('../controllers/languageController');

router.get('/languages', list);
router.post('/create', create);
router.delete('/:id/', remove)

router.param('languageId', languageById);
router.param('userId', userById);

module.exports = router;