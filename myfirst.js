const http = require('http');
const fs = require('fs');

const server = http.createServer((req , res)=>{
    res.writeHead(200, {'content-type':'text/plain'});
    res.end('Hello Shubham jangid');
});

server.listen(80, '127.0.0.1', ()=>{console.log('listning on port 80.')})