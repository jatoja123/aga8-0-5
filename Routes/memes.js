const Meme = require('../Models/Meme')

//potem skasować: to example
const makeMeme = async () => {
    const meme = new Meme({
        Link: "www.bing.com",
        author: "JA",
        title: "what makes meeeeemeeeee noise? meep!",
    })
    try {
    const result = await meme.save()
    }
    catch (error){
        console.log(error)
    }
}

module.exports = makeMeme;