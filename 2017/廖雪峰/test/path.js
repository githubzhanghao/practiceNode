
var path = require('path');

var http = require('http');

var fs = require('fs');

var workDir = path.resolve('.');

var filePath = path.join(workDir,'path.js');


var server = http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html'});

	response.end('<h1>' + request.method + '</h1>');
	
});
server.listen(8080);
console.log('server is starting...');
fs.readFile(filePath,'utf-8',function(err,data){
	if(!err){
		console.log(data);
	}
})