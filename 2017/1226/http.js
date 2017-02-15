
// var http = require('http');

// var server = http.createServer(function(request,response){
// 	//回调函数接受request和response对象

// 	//获取HTTP请求的method和url
// 	console.log(request.method + ':' + request.url);
// 	//将HTTP响应200写入response,同时设置Content-Type:text/html
// 	response.writeHead(200,{'Content-Type':'text/html'});

// 	//将HTTP响应的HTML内容写入response
// 	response.end('<h1>Hello world</h1>');


// });

//让服务器监听8080端口
//server.listen(8080);
//console.log('Server is running at http://127.0.0.1:8080');


//用来解析url的模块
//var url = require('url');

//console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

var path = require('path');
//解析当前目录
var workDir = path.resolve('.');
console.log(workDir);
var filePath = path.join(workDir,'pub','index','sdsd');
console.log(filePath);





















