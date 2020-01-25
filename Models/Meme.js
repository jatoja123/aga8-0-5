const mongoose = require('mongoose')
const joi = require('@hapi/joi')

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
        minLength: 3,
        maxLength:30,
    },
    date: {
        type: date,
        default: Date.now,
    },
});

const Meme = mongoose.model('Meme', memeSchema);

const validateMeme = (meme) => {
    const schema = joi.object({
        Link: joi.string().min(7).required(),
        author: joi.string().required(), //do zmiany -> user
        likes: joi.number().min(0).default(0),
        title: joi.string().min(3).max(30)
    })
    return schema.validate(meme)
}

exports.Meme = Meme
exports.validate = validateMeme