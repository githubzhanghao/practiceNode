
var fs = require('fs');

fs.readFile('file.txt','UTF-8',function(err,data){
	if(err){
		console.log('read File Err');
	}
	else{
		console.log(data);
	}
});

console.log('end.');