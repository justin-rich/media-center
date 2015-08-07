var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var path = require('path');
var port = process.env.PORT || 2600;
var morgan = require('morgan');

app.use(morgan('combined'));
app.use(express.static(__dirname + '/html'));

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/html/index.html');
});

app.get('/file', function(req, res) {
	res.sendfile(__dirname + '/html/file.html');
});

app.get('/remote', function(req, res) {
	res.sendFile(__dirname + '/html/remote.html');
})

server.listen(port, function(){
   console.log("Express server listening on port " + port);
});

// Display Control

io.on('connection', function (socket) {
	console.log("\n\nRemote Client Connected\n\n")
	
  socket.on('control-prev', function (data) {
		console.log("control-prev");
    socket.broadcast.emit('prev');
  });
	
  socket.on('control-next', function (data) {
		console.log("control-next");		
    socket.broadcast.emit('next');
  });
	
  socket.on('control-enter', function (data) {
		console.log("control-enter");		
    socket.broadcast.emit('enter');
  });
		
  socket.on('disconnect', function(){
     console.log("\n\nRemote Client Disconnected\n\n");
   });
	
});