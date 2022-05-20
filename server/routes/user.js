const express = require('express')
const router = express.Router()
const authJWT =require('../middelwares/authJWT')
const authController =require('../controllers/authController')
const {upload, resizeImage} = require('../middelwares/resizedUpload')

router.use((req, res, next) => 
{res.header("Access-Control-Allow-Headers","x-access-token, Origin, Content-Type, Accept");
  next();
});  

router.post('/register', authController.register)

router.post('/login', authJWT.verifyUser, authController.login )

router.get('/logout', authController.logout)

router.get('/authentication', authJWT.verifyToken, authJWT.authentication)

//router.put('/update/:id', upload.single('photo'), resizeImage, authJWT.verifyOwnership, authController.update)

router.put('/password/:id', authJWT.verifyUser, authController.update)

router.put('/:id',  authJWT.verifyOwnership, authController.update)

router.delete('/:id',  authJWT.verifyOwnership, authController.logout, authController.delete)

router.get('/profile/:username', authController.getMyProfile)

router.get('/:id', authController.getUserById)

router.get('/:id/recipes', authController.getUserRecipes)

router.get('/:id/favorites', authController.getUserFavorites)

router.get('/admin', authJWT.verifyToken, authJWT.authentication);

/* router.param("userId", authController.userById); */

module.exports= router