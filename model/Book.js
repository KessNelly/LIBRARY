const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    title: String,
    category: String,
    author: String
})


module.exports = mongoose.model('Book', BookSchema)