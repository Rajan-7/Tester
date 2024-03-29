const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./image");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});

const filefilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/webp"
  ) {
    cb(null,true);
  }else{
    cb(new Error(`Unsupported File Types`),false);
  }
};

const upload = multer({
    storage:storage,
    limits:{
        fileSize:1024*1024*20,
    },
    fileFilter:filefilter
})

module.exports = upload;
