
var fs = require("fs");

fs.readFile('test.txt','utf-8',function(err,data){
	
	if(err){
		console.log('错误：'+ err);
	}
	else{
		console.log('读取到的内容是：'+ data);
		//将一个字符串转换为buffer

		var buff = new Buffer(data,'utf-8');
		//Buffer类型和字符串拼接 会 隐式转化成字符串类型
		console.log('转换成buffter：');
		console.log(buff);
	}
});