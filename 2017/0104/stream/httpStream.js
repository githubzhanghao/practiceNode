
var http = require('http');

var server = http.createServer(function(req,res){
	var body = '';

	req.setEncoding = 'utf8';
	req.on("data",function(chunk){
		body += chunk;
		console.log(body);
	});

	req.on('end',function(){
		try{
			var data = JSON.parse(body);
		}
		catch(er){
			res.statusCode = 400;
			return res.end('错误：'+er.message);
		}
		res.write(typeof data)

		res.end();
	})

});
server.listen(1337);
console.log('server is starting...');