const mongoose = require('mongoose')

const memeSchema = mongoose.Schema({
    Link: {
        type: String,
        required: true,
        minLength: 7,
    },
    author: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        min:0,
        default: 0,
    },
    title:{
        type: String,
        minLength: 2,
        maxLength:40
    },
    
});

const Meme = mongoose.model('Meme', memeSchema);

module.exports = Meme;