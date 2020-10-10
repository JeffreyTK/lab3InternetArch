var url = require('url');
var fs = require('fs')
var http = require('http'); 
var server = http.createServer(function(request, response) {
        fs.readFile('./serverTime.html', function(error, data){
            let q = url.parse(request.url, true);
            if(error){
                response.writeHead(404);
                response.write(error);
                response.end();
            }else{
                response.writeHead(200, {
                    'Content-Type': 'text/html'  
                });  
                var date = new Date();
                response.write(data);
                if (q.query['name'] == undefined){
                    response.end();
                }else{
                    var returnText = "Hello " + q.query['name'] + " it is currently " + date
                    response.end(returnText);
                }
            }});
    });
server.listen(8888 || process.env.PORT);