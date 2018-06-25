var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    var urlObj = url.parse(request.url);

    var pathname = urlObj.pathname;
    var query = urlObj.query;
    if(pathname === '/'){
        readFileAndResponse('/node.html', response);
    }else if(pathname === '/ajax'){
        response.end('{"msg":"file not found!"}');
    }else{
        readFileAndResponse(pathname, response);
    }
}).listen(8080);

function readFileAndResponse(pathname, response){
    fs.readFile(pathname.substr(1), 'utf-8', function (err, data) {
        if (err) {
            response.writeHead(404);
            response.end("file not found!");
        }else{
            response.end(data);
        }
    });
}