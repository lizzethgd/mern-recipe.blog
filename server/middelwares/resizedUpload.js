const multer  = require('multer');
const sharp = require("sharp")
const cloudinary = require("cloudinary").v2
const { Readable } = require("stream");

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const bufferToStream = (buffer) => {
  try{
  const readable = new Readable({
    read() {
      this.push(buffer);
      this.push(null);
    },
  });
  return readable;
}catch (err) {
  console.log('error bufferToStream: '+err);
  }
}; 

const uploadFromBuffer = (img, folder) => {

  return new Promise((resolve, reject) => {

   const upload_stream = cloudinary.uploader.upload_stream({folder: folder },
    (error, result) => {
      if (error) {
          console.log('error uploadFromBuffer: '+err);
          reject(error);       
      } else {
          resolve(result.secure_url);
      }
    }); 
    bufferToStream(img).pipe(upload_stream) 
    
  }) 
    
}

//multer 
const storage = multer.memoryStorage();  

const limits = {
  fileSize: 1048576
}  

const fileFilter = (req, file, cb) => {
  const allowedMimes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedMimes.includes(file.mimetype)){
            cb(null, true);
        }else {
          cb({
            success: false,
            message: 'Invalid file type. Only jpg, png image files are allowed.'
            }, false);
        }
};
  
const upload = multer({ storage, limits, fileFilter }).single('photo')

exports.fileUpload = (req, res, next) => {

  upload(req, res, function (error) {
      if (error) { //instanceof multer.MulterError
          res.status(500);
          if (error.code == 'LIMIT_FILE_SIZE') {
              error.message = 'File Size is too large. Allowed file size is 1MB';
              error.success = false;
          }
          return res.json(error);
      } else {
          next()
      }
  })
};

exports.resizeImage = async(req, res, next) => {
  
  if (!req.file) return next();

  const folder = req.body.title ? 'recipes' : 'users'

 /*  console.log('req.file in resize funtion: ')
  console.log(req.file) */

  const metadata = await sharp(req.file.buffer).metadata();
  console.log(metadata);

  if (metadata.width > 900 || metadata.height> 600 || metadata.format==='png'){
  
    try{
  
      const resizedBuffer = await sharp(req.file.buffer).toFormat('jpeg', { mozjpeg: true }).toBuffer()

      console.log(resizedBuffer)

      req.body.photo= await uploadFromBuffer(resizedBuffer, folder)
  
      next();
    }catch(err){ 

      console.log('error resizeImage: '+err)
    }
}

else{
     req.body.photo= await uploadFromBuffer(req.file.buffer, folder)
     next();
}
}
