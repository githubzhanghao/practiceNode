
//获取get请求url对象
var http = require('http');

var urls = require('url');

var util = require('util');

http.createServer(function(req,res){

	res.writeHead(200,{
		'Content-Type':'text/plain'
	});

	res.end(util.inspect(urls.parse(req.url,true)));// true会把参数解析为一个对象；false解析成字符串
}).listen(3000);