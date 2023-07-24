const Book = require('../model/Book')

const getBook = async (req, res)=>{
    try {
        const books = await Book.find({})
        res.status(200).json(books)

    } catch (error) {
        console.log(error)
    }
    
}

const creatBook = async (req, res) =>{
    try {
       const books = await Book.create(req.body)
       res.status(201).json({
          message: 'success',
          'data' : books
        })
    } catch (error) {
      console.log(error)
    }
  }
  
  const showBook = async (req, res)=> {
      const id = req.params.id
      try {
          const books = await Book.findById(id) 
          res.status(200).json(books)
      } catch (error) {
          console.log(error)
      }
  }
  
  
  const updateBook = async (req, res)=> {
      const id = req.params.id
      const booksBody = req.body
      try {
          const books = await Book.findByIdAndUpdate(id, booksBody) 
          res.status(200).json(books)
      } catch (error) {
          console.log(error)
      }
  }
  

  const deleteBook = async (req, res)=> {
      const id = req.params.id
      try {
          const books = await Book.findByIdAndDelete(id) 
          res.status(200).json({
              message: 'deleted successfully'
          })
      } catch (error) {
          console.log(error)
      }
  }
  
  
  
  
  module.exports = {getBook, creatBook, showBook, updateBook, deleteBook}
