const express = require('express')
const router = express.Router()
const authController =require('../controllers/authController')
const middelware1 =require('../middelwares/authJWT')


router.use((req, res, next) => 
{res.header("Access-Control-Allow-Headers","x-access-token, Origin, Content-Type, Accept");
  next();
});  

router.post('/register', authController.register)

router.post('/login', middelware1.verifyUser, authController.login )

router.get('/logout',  middelware1.verifyToken, authController.logout)

router.get('/authenticated', middelware1.verifyToken, middelware1.getAuthenticated )

router.put('/:id',  middelware1.verifyOwnership, authController.update)

router.delete('/:id',  middelware1.verifyOwnership, authController.logout, authController.delete)

router.get('/:id', authController.getById)

router.get('/admin', middelware1.verifyToken, middelware1.getAuthenticated);

router.get('/:id/recipes', authController.getUserRecipes)

module.exports= router