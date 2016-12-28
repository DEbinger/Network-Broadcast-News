const net = require('net');

let server = net.createConnection(8888, 'localhost');
server.on('connect', () => {

  console.log("connected");

  process.stdin.pipe(server);
});
/*
socket.on('data', (chunk) => {
  messageCount++;
socket.write(`write current message cont is: ${messageCount}`);
console.log('chunk from client: ${chunk}');
console.log(`the current message count is: ${messageCount}`);

process.stdin.on('data', (cmd) => {
  socket.write(cmd);
});*/