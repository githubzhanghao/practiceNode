
var fs = require('fs');

fs.readFile('1.gif',function(err,data){
	
	if(err){
		console.log('错误：'+err);
	}
	else{
		console.log(data);
		console.log(data.length + 'bytes');
	}
});