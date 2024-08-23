import multer from "multer";



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)  //well, not a good practice let's say if 4-5 files are uplaoded simultaneously with same name, then
      // one file can override another. But since the files are for very less time on the server, so for now we can write this.
    }
  })
  
export const upload = multer({ 
    storage
 })
