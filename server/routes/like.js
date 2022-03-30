const {Router} = require("express");
const router = Router()

const { add, remove} = require('../controllers/likeController');

router.post('/add', add)
router.delete('/:id', remove)

module.exports = router;