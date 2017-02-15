
var http = require('http');
var url = require('url');
var util = require('util');

//启动服务
http.createServer(function(req,res){

	console.log('接受到请求，准备解析');

	var params = url.parse(req.url,true);
	console.log('解析完成');
	console.log(params.query.name);
	console.log(util.inspect(params));
	console.log('向客户端返回...');
	res.end(params.query.name);
}).listen(3000);


http.get({
		'host':'localhost',
		'port':3000,
		'path':'/?name=hulk&age=23'
	},

	function(res){
		res.setEncoding('utf-8');
		res.on('data',function(data){
			console.log('服务端响应回来的数据为 : ' + data);
		})
	}
)