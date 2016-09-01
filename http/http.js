
var http = require('http');

var server = http.createServer(function(req,res){
	console.log(req.url);

	//响应头
	res.writeHead(200,{
		'Content-Type':'text/html'
	});

	//响应内容
	res.write('<h1>head</h1>');

	//结束响应
	res.end('<p>Hulk</p>')

});

server.listen(3000);

server.on('connection',function(){
	console.log('监听了事件');
})

server.on('close',function(){
	console.log('服务关闭了');
})

server.close();


console.log('HTTP server is listening at port 3000');