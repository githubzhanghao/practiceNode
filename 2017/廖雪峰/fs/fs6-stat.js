
var fs = require('fs');

var stat = fs.statSync('test.txt');
console.log('isFile：'+stat.isFile());
console.log('isDirectory：'+ stat.isDirectory());

if(stat.isFile()){
	console.log('文件大小：'+stat.size);
	console.log('文件创建时间：'+stat.birthtime);
	console.log('modified time文件最后修改时间:'+stat.mtime);
	console.log('isSocket：'+stat.isSocket());
}
// console.log(JSON.stringify(stat));
for(var i in stat){
	console.log(i+':'+stat[i]);
}