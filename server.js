//jshint esversion: 6

const net = require('net');

let messageCount = 0;
let server = net.createServer((server) => {

  server.on('data', (chunk) => {
    messageCount++;
    console.log(`Client: ${chunk}`);
    process.stdin.pipe(server);

  });
});

server.listen(8888, '0.0.0.0',  () => {
  console.log('opened sever on ', server.address());
});