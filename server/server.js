const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const db = ['messages empty'];

const app = express();
const server = http.Server(app);
const socket = socketio(server);
const io = require('socket.io')();

server.listen(3000, () => console.log('listening on *:3000'));

socket.on('connection', (socket) => {
  console.log('A client just joined on', socket.id, ' at channel ' +socket.channel + ' messages:' + db);
});

// socket.on('message', (message) => {
//   db.concat('message');
//   console.log(message);
// })