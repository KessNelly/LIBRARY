const express = require('express')
const router = express.Router()
const bookController = require('../controller/bookCtrl')




router.get('/api/books', bookController.getBook )
router.post('/api/books', bookController.creatBook) 
router.get('/api/books/:id', bookController.showBook )
router.put('/api/books/:id', bookController.updateBook )
router.delete('/api/books/:id', bookController.deleteBook )


module.exports = router