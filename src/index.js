const express = require('express')
const server = express()
const message = require('./models/fcmModel')
const cors = require('cors')

server.use(cors())
server.use(express.json())

server.post('/notification', async (req, res) =>{
    const {title, tokens, body} = req.body

    await message.sendMessage(tokens, title, body)
    res.send('OK')
    console.log('parece ter ido')
})


server.listen('8163', () => console.log('ta ligado'))