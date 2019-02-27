var net = require('net');
const moment = require('moment');

console.log(process.env.NODE_ENV);
var server = net.createServer(function(socket) {
  console.log('in');
  socket.on('data', function(data) {
    socket.write(data);
  });
  socket.on('error', function() {
    console.log('socket error, lose connection');
  });
});

setInterval(() => {
  const memory = process.memoryUsage();
  console.log(
    moment().format('YYYY/MM/DD HH:mm:ss'),
    'rss',
    memory.rss / (1024 * 1024),
    'heapTotal',
    memory.heapTotal / (1024 * 1024),
    'heapUsed',
    memory.heapUsed / (1024 * 1024),
    'external',
    memory.external / (1024 * 1024),
  );
}, 60 * 1000);

server.listen(3000, 'localhost');
