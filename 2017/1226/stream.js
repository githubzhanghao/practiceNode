
var fs = require('fs');

//打开一个流
var rs = fs.createReadStream('stream.txt','utf-8');

//data事件可能会有多次，每次传递的chunk是流的一部分数据
//要以流的形式写入文件，只需要不断调用write()方法，最后以end()结束
// rs.on('data',function(chunk){
// 	console.log('DATA');
// 	console.log(chunk);
// });

// rs.on('end',function(){
// 	console.log('END');
// });

// rs.on('error',function(err){
// 	console.log('ERROR' + err);
// });

//demo2
//创建一个写入流
// var ws1 = fs.createWriteStream('stream.txt','utf-8');
// //写入
// ws1.write('ws1使用Stream写入二进制数据...\n');
// ws1.write('END-ws1');
// ws1.end();

var ws2 = fs.createWriteStream('stream.txt');
ws2.write(new Buffer('ws2使用Stream写入二进制数据...\n','utf-8'));
ws2.write(new Buffer('END','utf-8'));
ws2.end();

var rs = fs.createReadStream('stream.txt','utf-8');
rs.on('data',function(chunk){
	console.log('DATA1');
	console.log(chunk);
});
rs.on('end',function(){
	console.log('END-rs');
});
rs.on('error',function(err){
	console.log('err: ' + err);
})


















