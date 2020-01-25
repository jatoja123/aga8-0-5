require('dotenv').config()
const mongoose = require('mongoose')
const makeMeme = require('./Routes/memes')

mongoose.connect(process.env.DB,{useNewUrlParser: true})
    .then(()=>console.log("MongoDB is working well..."))
    .catch(error=>console.log(error))

link = "https://ih0.redbubble.net/image.422825483.8539/farp,small,wall_texture,product,750x1000.jpg"
makeMeme(link,"ME","Shrump be like:");