var http = require('http')
var path = require('path')
var express = require('express')

var app = express()

app.use(express.static(path.join(__dirname, 'public')))

var server = http.createServer(app)
var io = require('socket.io')(server)

io.on('connection', function (socket) {

  socket.on('audio', function (audio) {
    console.log(audio[0])
  })
})


server.listen(9090)
