const {Router} = require("express");
const router = Router()
const {userById} = require('../controllers/authController');

const { list, create, remove, regionById } = require('../controllers/regionController');

router.get('/list', list);
router.post('/create', create);
router.delete('/:id/', remove)

router.param('regionId', regionById);
router.param('userId', userById);

module.exports = router;