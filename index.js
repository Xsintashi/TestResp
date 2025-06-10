var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write(`Witaj w Azure!\n`);
  res.end();
}).listen(8080);