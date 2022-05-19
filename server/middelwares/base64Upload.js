const multer  = require('multer');
//const sharp = require('sharp');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      console.log('elfileuplosad')
      console.log(file)
      cb(null, './client/public/imgUploads/recipes')
    },
    filename:  (req, file, cb) => {
        console.log(file)
      cb(null, 'recipe'+ Date.now() + '.jpg')
    }
  })

const limits = {
  fileSize: 1048576
}  
  
const upload = multer({ storage,  limits})

module.exports = upload.single('photo')