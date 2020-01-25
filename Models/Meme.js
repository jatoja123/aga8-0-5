const mongoose = require('mongoose')
const joi = require('@hapi/joi')

const memeSchema = mongoose.Schema({
    link: {
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
        minLength: 3,
        maxLength:30,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Meme = mongoose.model('Meme', memeSchema);

const validateMeme = (meme) => {
    const schema = joi.object({
        link: joi.string().min(7).required(),
        author: joi.string().required(), //do zmiany -> user
        title: joi.string().min(3).max(30)
    })
    return schema.validate(meme)
}

exports.Meme = Meme
exports.validate = validateMeme