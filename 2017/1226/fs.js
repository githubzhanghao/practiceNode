
var fs = require('fs');

// fs.readFile('input.txt','utf-8',function(err,data){
// 	if(err){
// 		console.log('读取文件失败');
// 		console.log(err);
// 		return;
// 	}
// 	console.log(data);
// })

fs.readFile('1.png',function(err,data){
	if(err){
		console.log('读取文件失败');
		console.log(err);
		return;
	}
	console.log(data);

	//把一个Buffer对象转换成String
	var text = data.toString('utf-8');
	console.log(text);
	//把一个String类型转化成Buffer
	var btf = new Buffer(text,'utf-8');
	console.log(btf);
})

