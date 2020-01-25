const {Meme,validate} = require('../Models/Meme');
const express = require('express')

//potem skasować: to example
const makeMeme = async (link,author,title) => {
    const meme = new Meme({
        Link: link,
        author: author,
        likes: 0,
        title: title,
    })
    try {
    const result = await meme.save()
    }
    catch (error){
        console.log(error)
    }
}

module.exports = makeMeme;