const multer  = require('multer');
const path = require('path');
const sharp = require("sharp")

const storage = multer.memoryStorage();  

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
  
exports.upload = multer({ storage,  limits, fileFilter })

exports.resizeImage = async(req, res, next) => {
  
  if (!req.files) return next();

  console.log('req.file in resize funtion: ')
  console.log(req.file)
  
  try{
    const dir = './client/public/'
    const destination = 'imgUploads/recipes/'
    const imgName = 'recipe'+ Date.now() + '.jpg'
    await sharp(req.file.buffer)
    .resize(600, 400)
    .toFormat('jpeg')
    .jpeg({ quality: 95 })
    .toFile(
        path.resolve(dir, destination, imgName)
    )
    req.body.photo= destination+imgName
  next();
}catch(err){'resizeImage error: '+console.log(err)}
}