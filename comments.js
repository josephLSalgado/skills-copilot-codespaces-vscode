// Create web server

// Import modules
const express = require('express');
const router = express.Router();

// Import controller
const commentsController = require('../controllers/comments');

// Import middleware
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Routes
router.post('/', auth, multer, commentsController.createComment);
router.put('/:id', auth, multer, commentsController.modifyComment);
router.delete('/:id', auth, commentsController.deleteComment);
router.get('/:id', auth, commentsController.getOneComment);
router.get('/', auth, commentsController.getAllComments);

// Export
module.exports = router;