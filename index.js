var app = require('express')();
var server = require("http").Server(app);
var io = require('socket.io')(server);
server.listen(3000);
app.get('/', function (req, res) {
    console.log('~~~ server is runing...');
    res.sendFile(__dirname + '/index.html');
});
app.get('/test', function(req,res){
    
    console.log('~~~ wifi modem runing...');
})
io.on('connection', function (socket) {

    console.log('~~~ client connect...');
    socket.on('led-change', function (data) {
        console.log(data);
        socket.broadcast.emit('led-change', data);
    });
    socket.on('disconnect', function(){
        console.log('Client disconnect');
    })
});