const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');


router.get('/books', booksController.jsonBooks);
module.exports = router;