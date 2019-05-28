const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(cors())

const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', socket => {
    socket.on('connectRoom', fila => {
        socket.join(fila)
    })
})

mongoose.connect(
    'mongodb+srv://xlist:xlist1997@cluster0-8icnx.mongodb.net/test?retryWrites=true', 
    {
        useNewUrlParser: true
    }
)

app.use((req, res, next) => {
    req.io = io

    return next()
})

app.use(express.json())

app.use(require('./routes'))

server.listen(process.env.PORT || 3333)