
//获取post请求url对象
var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function(req,res){

	var post = '';
	//注册data事件监听函数，每当接受请求体的数据时执行
	req.on('data',function(chunk){
		post += chunk;
		res.write(post);
	});

	req.on('end',function(){
		//解析成真正的post为真正的post请求格式
		post = querystring.parse(post);
		//向前端返回
		res.end(util.inspect(post));
	});

}).listen(3000);