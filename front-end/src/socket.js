import {io} from 'socket.io-client';

let socket
function initSocket() {
    socket = io();
}

export {socket, initSocket};