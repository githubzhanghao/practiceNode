
var fs = require('fs');

var data = 'Hello,Nodejs';
fs.readFile('input.txt',function(err,data){
	console.log('读取中。。。');
	console.log(data.toString());

	fs.writeFile('input.txt',data,function(err){
	if(err){
		console.log(err);
		return;
	}
	console.log('写入成功');
	});

	fs.readFile('input.txt','utf-8',function(err,data){
		if(err){
			console.log(err);
			return;
		}
		console.log(data);
	})
})


