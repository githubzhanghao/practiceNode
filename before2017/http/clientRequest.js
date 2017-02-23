
var http = require('http');

var querystring = require('querystring');

//启动服务
http.createServer(function(req,res){
	console.log('请求到来，解析参数');

	var post = '';

	req.on('data',function(chunk){
		post += chunk;
	});

	req.on('end',function(){
		post = querystring.parse(post);
		//解析完成
		console.log('参数解析完成，返回name参数');
		res.end(post.name);
	});

}).listen(3000);


//客户端请求

var contents = querystring.stringify({
	name:'hulk',
	age:22,
	address:'beijing'
});

var options = {
	host:'localhost',
	path:'/',
	port:3000,
	method:'POST',
	headers:{
		'Content-Type':'application/x-www-form-urlencoded',
		'Content-Length':contents.length
	}
};

var req = http.request(options,function(res){
	res.setEncoding('utf-8');
	res.on('data',function(data){
		console.log('后台返回数据');
		console.log(data);
	})
});
req.write(contents);
req.end();