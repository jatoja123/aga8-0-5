const {Meme,validate} = require('../Models/Meme');
const express = require('express')

const router = express.Router()

router.get('/', async (req,res)=> {
    const memes = await Meme.find().sort({date:1})
    res.send(memes)
})

//dla chętnych dopisac routa dla jednego mema

router.post('/', async (req,res) => {
    const {error} = validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    try {
        const meme = await new Meme(req.body).save()
        res.send(meme)
    }
    catch (error){
        res.status(400).send(error.message)
    }
})

module.exports = router