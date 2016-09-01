
var fs = require('fs');

fs.open('f.txt','r',function(err,fd){
	if(err){
		console.log(err);
		return;
	}
	var buf = new Buffer(600);
	fs.read(fd,buf,0,600,null,function(err,bytesRead,buffer){
		if(err){
			console.log(err);
			return;
		}
		console.log('bytesRead   '+ bytesRead);
		console.log(buf);
		fs.appendFile('buffer.txt',buf,function(err){
			if(err) throw err;
			console.log('写入完成')
		})
	})
})