require('dotenv').config()
const mongoose = require('mongoose')
const makeMeme = require('./Routes/memes')

mongoose.connect(process.env.DB,{useNewUrlParser: true})
    .then(()=>console.log("mongodb"))
    .catch(error=>console.log(error))

makeMeme();