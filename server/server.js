const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname, '../public');

const {generateMessage} = require('./utils/message');

const express = require('express');
const socketIO = require('socket.io');

//------------------------------------------------------------------

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'))

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'new user joined'))

    socket.on('createMessage', function (message, callback) {
        console.log('new message', message)
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('this is from the server');
        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
    })

    socket.on('disconnect', () => {
        console.log('client disconnected')
    })
});










server.listen(3000, () => {
    console.log('server is up on port 3000')
});
