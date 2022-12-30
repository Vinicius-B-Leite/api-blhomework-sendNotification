const express = require('express')
const server = express()
const message = require('./models/fcmModel')
const cors = require('cors')

server.use(cors)
server.use(express.json())

server.post('/notification', async (req, res) =>{
    const {title, tokens, body} = req.body

    await message.sendMessage(tokens, title, body)
    res.send('OK')
})


server.listen('3333', () => console.log('ta ligado'))