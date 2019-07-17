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

    socket.on('disconnect', () => {
        console.log('client disconnected')
    })
});










server.listen(3000, () => {
    console.log('server is up on port 3000')
});
