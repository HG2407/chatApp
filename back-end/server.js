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
let roomMessageList = new Map();
let joinedPeople = 0;

io.on('connection', (client) => {


    //for room Chat
    client.on('roomData', (data) => {
        let roomName;
        if(data.event == 'create') {
            client.emit('roomId', client.id);
            roomName = data.name;
        } else if(data.event == 'joinRoom') {
            client.join(data.id);
        } else if(data.event == 'sendRoomMsgHistory') {
            if(!roomMessageList.has(data.roomId)) {
                roomMessageList.set(data.roomId, []);
            } 
            let roomInfo = roomMessageList.get(data.roomId);
            io.in(data.roomId).emit('roomMsgHistory', {msgHistory: roomInfo, roomName: roomName});

        } else if(data.event == 'messageTyped') {
            roomMessageList.get(data.roomId).push({name: data.name, msg: data.msg});
            client.to(data.roomId).emit('messageToRoomFromServer', {name: data.name, msg: data.msg});
        }
    })

    //for global Chat
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
        client.emit('JoinedPeople', --joinedPeople);
        client.disconnect();
    })

})


app.use(express.static(path.join(__dirname, './dist')));
server.listen(8000, () => {
    console.log('server is listening at port: 8000');
})