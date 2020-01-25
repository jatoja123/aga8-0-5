const {Meme,validate} = require('../Models/Meme');
const express = require('express')

const router = express.Router()

router.get('/',(req,res)=> {
    const memes = Meme.find().sort({date:1})
    res.send(memes)
})

//dla chętnych dopisac routa dla jednego mema

router.post('/',(req,res) => {
    const {error} = validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)
})

module.exports = router