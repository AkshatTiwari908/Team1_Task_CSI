 if(process.env.NODE_ENV != "production"){
     require('dotenv').config();
     }
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
// const upload = require('../cloudConfig').upload; 
const multer  = require('multer');
 const storage = require("../cloudConfig.js");
 const upload = multer({ storage});
// Fetch all posts
router.get('/', postController.getPosts);

// Create a new post
router.post('/', upload.single('image'), postController.createPost);

// Toggle like on a post
router.post('/:postId/like', postController.toggleLike);

module.exports = router;