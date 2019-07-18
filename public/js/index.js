let socket = io();

socket.on('connect', function () {
    console.log('connected to server');

    socket.emit('createEmail', {
        to: 'example@gmail.com',
        text: 'new email from node chat app'
    });

    socket.emit('createMessage', {
        from: 'testexample@gmail.com',
        text: 'a new message from client one'
    })

});

socket.on('disconnect', function () {
    console.log('disconnected from server');
});

socket.on('newEmail', function (email) {
    console.log('new email', email);
});

socket.on('newMessage', function (message) {
    console.log('new message', message);
});