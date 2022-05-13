const multer  = require('multer');
//const sharp = require('sharp');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      console.log('elfileuplosad')
      console.log(file)
      cb(null, './client/public/imgUploads')
    },
    filename:  (req, file, cb) => {
        console.log(file)
      cb(null, 'img'+ Date.now() + path.extname(file.originalname))
    }
  })

const limits = {
  fileSize: 1048576
}  

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' 
        || file.mimetype === 'image/jpeg'){
            cb(null, true);
        }else {
            cb(null, false);
        }
};
  
const upload = multer({ storage,  limits, fileFilter })

module.exports = upload.single('photo')