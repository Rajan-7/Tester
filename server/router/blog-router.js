const express = require('express');
const router =express.Router();
const {blog,blogGet} = require('../controller/blog-controller');

router.route("/blogs").post(blog);
router.route("/blogs").get(blogGet);

module.exports = router