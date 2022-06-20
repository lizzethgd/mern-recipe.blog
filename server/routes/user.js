const express = require('express')
const router = express.Router()
const authJWT =require('../middelwares/authJWT')
const authController =require('../controllers/authController')
const userController =require('../controllers/userController')
const {fileUpload, resizeImage} = require('../middelwares/resizedUpload')

router.use((req, res, next) => 
{res.header("Access-Control-Allow-Headers","x-access-token, Origin, Content-Type, Accept");
  next();
});  

router.post('/register', authController.register)

router.post('/login', authJWT.verifyUser, authController.login )

router.get('/logout', authController.logout)

router.get('/authentication', authJWT.verifyToken, authJWT.authentication)

router.put('/password/:id', authJWT.verifyUser, userController.update)

router.put('/:id',  fileUpload, resizeImage, authJWT.verifyOwnership, userController.update)

router.delete('/:id',  authJWT.verifyOwnership, authController.logout, authController.delete)

router.get('/profile/:username', userController.getMyProfile)

router.get('/:id', userController.getUserById)

router.get('/:id/recipes', userController.getUserRecipes)

router.get('/:id/favorites', userController.getUserFavorites)

router.get('/admin', authJWT.verifyToken, authJWT.authentication);

/* router.param("userId", authController.userById); */

module.exports= router