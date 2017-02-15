//同步读取
/*
var fs = require('fs');
console.log('开始读取');
var data = fs.readFileSync('input.txt');
console.log('已读的文件'+data);
console.log('程序执行结束');
*/

//异步读取
var fs = require('fs');
fs.readFile('input.txt',function(err,data){
	if(err){
		return console.error(err);
	}
	console.log(data.toString());
});
console.log('程序执行结束');