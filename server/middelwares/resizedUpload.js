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
          resolve(result.url);
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
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' 
        || file.mimetype === 'image/jpeg'){
            cb(null, true);
        }else {
            cb(null, false);
        }
};
  
exports.upload = multer({ storage, limits, fileFilter })

exports.resizeImage = async(req, res, next) => {
  
  if (!req.file) return next();

  const folder = req.body.title ? 'recipes' : 'users'

 /*  console.log('req.file in resize funtion: ')
  console.log(req.file) */
  
  try{
  
    const resizedBuffer = await sharp(req.file.buffer).resize(600, 400).toFormat('jpeg').jpeg({ quality: 95 }).toBuffer()

    req.body.photo= await uploadFromBuffer(resizedBuffer, folder)
  
  next();
}catch(err){ console.log('error resizeImage: '+err)}
}
