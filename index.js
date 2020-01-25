require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')

const app = express()

//routes
const meme = require('./routes/memes')

//middleware
app.use(express.json())
app.use('/api/memes',meme)

//mongoose
mongoose.connect(process.env.DB,{useNewUrlParser: true})
    .then(()=>console.log("MongoDB is working well..."))
    .catch(error=>console.log(error))

app.listen(3000, ()=>console.log("Listening on port 3000..."))