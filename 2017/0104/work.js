var fs = require('fs'),
	url = require('url'),
	path = require('path'),
	http = require('http');

var filenames = ['default.html','index.html'];

var root = path.resolve('.');//使用当前目录
console.log(process.argv[1]);
var server = http.createServer(function(request,response){
	var filename = url.parse(request.url);
	var filePath = path.join(root,filename);

	fs.stat(filePath,function(err,stat){
		if(err){
			console.log('不存在该文件');
			response.writeHead(404);
		}
		else{
			if(stat.ifFile()){
				console.log('请求的是文件');
				response.writeHead(200);
			}
			else if(stat.ifDirectory()){
				console.log('请求的是目录');
			}
		}
	})
});
server.listen(8080);

function isDir(response,dir){
	fs.readdir(dir,function(err,files){
		if(err){
			response.writeHead(404);
		}
		else{
			console.log(files);
			var names = files.filter(function(x){
				return x === 'index.html' || x === 'default.html';
			});
			if(names.length !== 0){
				response.writeHead(200,{'Content-Type':'text/html'});
				fs.createReadSteam(filePath.pipe(response));
			}
			else{
				response.writeHead(404);
			}
		}
	})
}



