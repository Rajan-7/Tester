const express = require('express');
const router = express.Router();

const imageUpload = require('../controller/image-controller');
const upload = require('../middleware/image-uploader');


router.route('/images').post(upload.single('image'),imageUpload);


module.exports = router