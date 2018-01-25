var server = require('./config/server');

var port = 3000;

server.listen(port, ()=>{
    console.log('Server running on port: '+port)
})