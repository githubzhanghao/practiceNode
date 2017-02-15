
var fs = require('fs');

//!!写入文件的时候 会把文件内容清空，切记 不是追加，是重写

var data = '要写入文件的内容';
//开启异步流写入
fs.writeFile('write.txt',data,function(err){

	if(err){
		console.log('写入错误');
	}
	else{
		console.log('写入成功');
	}
});

//同步写入
try{
	fs.writeFileSync('write.txt',data);	
}
catch(e){
	console.log('写入错误：'+e);
}


