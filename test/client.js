var net = require('net');
var conn;
var quitting = false;
var timer;

(function connect() {
  function reconnect() {
    setTimeout(connect, 5000);
  }

  conn = net.createConnection(3000, 'localhost');

  conn.on('connect', function() {
    console.log('connect to server');

    timer = setInterval(() => {
      conn.write(
        Buffer.from([0, 0, 0, 0, 0, 0, 0, 53, 65, 65, 65, 65, 65, 65, 49, 49, 49, 49, 49, 49]),
      );
    }, 1000);
  });

  conn.on('data', function(data) {
    console.log(data);
    console.log('receive data from server:', data);
  });

  conn.on('error', function(err) {
    console.log('Error in connection:', err);
  });

  conn.on('close', function() {
    clearInterval(timer);
    if (!quitting) {
      console.log('connection got closed, will try to reconnect');
      reconnect();
    }
  });
})();
