const multer  = require('multer');

const storage = multer.diskStorage({})

const limits = {
  fileSize: 1048576
}  

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' 
        || file.mimetype === 'image/jpeg'){
            cb(null, true);
        }else {
            cb(new Error('File type is not supported'), false);
        }
};
  
const upload = multer({ storage,  limits, fileFilter })

module.exports = upload.single('photo')