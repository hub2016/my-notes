/**
 * @author linjiabin
 * 1、作为一个HTTP服务器,让WEB客户端获取数据
 * 2、在HTTP服务器上另起一个TCP客户端向嵌入式相机发送协议请求
 * 难点:协议的封装
 */
// 首先加载所需要的模块作为全部变量
// HTTP服务端
var http_port = 9090, http = require('http'), server = new http.Server();
server.listen(http_port);
console.log('服务器正在监听端口:'+http_port);
// TCP客户端,
var net = require('net'), client = new net.Socket();
var tcp_port = 6666, tcp_host = '172.16.55.118';
client.connect(tcp_port, tcp_host);
console.log('建立通道:\nhost:'+tcp_host+'\nport:'+tcp_port);
// 文件系统处理
var fs = require('fs');
// 自定义协议模块
//var protocol = require('./protocol.js');
// 监听请求
server.on('request', function(request, response) {
    console.log('正在处理请求:'+request.url);
    var url = require('url').parse(request.url);
    client.on('data', function(data){
        if(data.length === 34) return;
        console.log('/***********************start***************************/');
        console.log('/***********************end  ***************************/');
        response.writeHead(200, {'Content-type':'text/plain; charset=UTF-8'});
        response.end();
        // client.destroy();
    });
    client.on('close', function() {
        console.log('Connection closed');
    });
    switch(url.pathname) {
    case ''||'/' :
        fs.readFile('./index.html', function(err, content){
            if(err) {
                response.writeHead(404, {
                    'Content-Type':'text/plain; charset="UTF-8"'
                });
                response.write(err.message);
                response.end();
            } else {
                response.writeHead(200, {
                    'Content-Type' : 'text/html; charset=UTF-8'
                });
                response.write(content);
                response.end();
            }
        });
        break;
    default : // 处理来自本地目录的文件
        var filename = url.pathname.substring(1);    // 去掉前导'/'
        var type = getType(filename.substring(filename.lastIndexOf('.')+1));
        // 异步读取文件,并将内容作为单独的数据模块传给回调函数
        // 对于确实很大的文件,使用流API fs.createReadStream()更好
        fs.readFile(filename, function(err, content){
            if(err) {
                response.writeHead(404, {
                    'Content-Type':'text/plain; charset="UTF-8"'
                });
                response.write(err.message);
                response.end();
            } else {
                response.writeHead(200, {
                    'Content-Type' : type
                });
                response.write(content);
                response.end();
            }
        });
        break;
    }
});
function getType(endTag) {
    switch(endTag){
    case 'html' :
    case 'htm' :
        type = 'text/html; charset=UTF-8';
        break;
    case 'js' : 
        type = 'application/javascript; charset="UTF-8"';
        break;
    case 'css' :
        type = 'text/css; charset="UTF-8"';
        break;
    case 'txt' :
        type = 'text/plain; charset="UTF-8"';
        break;
    case 'manifest' :
        type = 'text/cache-manifest; charset="UTF-8"';
        break;
    default :
        type = 'application/octet-stream';
        break;
    }
    return type;
}