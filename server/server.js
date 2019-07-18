const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname, '../public');

const express = require('express');
const socketIO = require('socket.io');

//------------------------------------------------------------------

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.emit('newEmail', {
        from: 'ahmadisorosh1@gmail.com',
        text: 'hey. what is going on?',
        createdAt: 123
    });

    socket.on('createEmail', (newEmail) => {
        console.log('new email', newEmail);
    })

    socket.emit('newMessage', {
        from: "ahmadisorosh1@gamil.com",
        text: 'hey this is a new message from sorousn ahmadi',
        createdAt: 231
    });

    socket.on('createMessage', function (message) {
        console.log('new message', message)
    })

    socket.on('disconnect', () => {
        console.log('client disconnected')
    })
});










server.listen(3000, () => {
    console.log('server is up on port 3000')
});
