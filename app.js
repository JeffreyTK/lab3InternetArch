'use strict';
var http = require('http');
var fs = require('fs');
http.createServer(function (request, response) {

    setTimeout(function () {
        fs.readFile('app.js', function (err, contents) {
            response.writeHead(200, {'Content-type':'text/plain'});
            response.write()
            fs.writeFile();
            response.end();
        });
        
    }, 2000);
   
}
).listen(8080);
console.log('listening ...');

function getTime(){
var date = new Date();
document.querySelector('html').innerHTML = '<div>Hello ' + 
    document.getElementById('fname') + ' the current server time is ' 
    + date.getTime();
}   