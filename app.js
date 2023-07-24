require('dotenv').config()
const express = require('express')
const bookRouter = require('./routes/bookRoute')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3009

app.use(express.json()) 
app.use(express.urlencoded({ extended:true }))
app.use(express.static('uploads'))


const dbConnect = async () =>{
    try {
        conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connection successful')
    } catch (error) {
        console.log('error')
    }
}

dbConnect()

app.use('/', bookRouter)

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
})