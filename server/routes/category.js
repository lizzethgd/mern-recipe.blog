const express = require('express');
const router = express.Router();

const { list, create, remove, categoryById } = require('../controllers/categoryController');

router.get('/list', list);
router.post('/create', create);
router.delete('/:id', remove)

router.param('categoryId', categoryById);


module.exports = router;