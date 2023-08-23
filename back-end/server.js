let express = require('express');
let path = require('path');
let app = express();
let http = require('http');
let socketio = require('socket.io');
let server = http.createServer(app);
let io = socketio(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

let messageHistory = [];

io.on('connection', (client) => {

    // WARNING: `socket.to(socket.id).emit()` will NOT work, as it will send to everyone in the room
    // named `socket.id` but the sender. Please use the classic `socket.emit()` instead.
    // from socket.io documentation
    client.emit('msgHistory', messageHistory);

    client.on('dataEmitted', (data) => {
        if(data.event == 'messageFromClient') {
            messageHistory.push({name: data.name, msg: data.msg});
            client.broadcast.emit('messageFromServer', {name: data.name, msg: data.msg})
        }
    });

    client.on('disconnect', () => {
        console.log('disconnected');
        client.disconnect();
    })

})


app.use(express.static(path.join(__dirname, './dist')));
server.listen(8000, () => {
    console.log('server is listening at port: 8000');
})