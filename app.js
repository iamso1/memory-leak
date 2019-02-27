var net = require('net');
const schedule = require('node-schedule');
const moment = require('moment');

var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    socket.write(data);
  });
  socket.on('error', function() {
    console.log('socket error, lose connection');
  });
});

schedule.scheduleJob('* */1 * * *', function() {
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
});
server.listen(3000, 'localhost');
