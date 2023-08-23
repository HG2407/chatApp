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

const users = new Set();
let messageHistory = [];
let joinedPeople = 0;

io.on('connection', (client) => {
    joinedPeople++;
    console.log(joinedPeople);
    console.log('New Websocket connection');
    client.emit('messageHistory', messageHistory);

    client.on('messageFromClient', (msg) => {
        messageHistory.push(msg);
        client.broadcast.emit('messageFromServer', msg);
    })

    client.on('disconnected', () => {
        joinedPeople--;
        console.log(joinedPeople);
        console.log('someone disconnected');
    })
})

// is this correct ?
app.use(express.static(path.join(__dirname, './dist')));
server.listen(8000, () => {
    console.log('server is listening at port: 8000');
})