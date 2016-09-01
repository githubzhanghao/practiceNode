
//引入fs模块

var fs = require('fs');

//调用读取文件方法

// fs.readFile('f.txt',function(err,data){
// 	if(err){
// 		console.log(err + '第一次readFile读取错误');
// 	}
// 	else{
// 		console.log(data + '第一次readFile读取成功');
// 	}
// });

// fs.readFile('f.txt','utf-8',function(err,data){
// 	if(err){
// 		console.log(err + '第二次readFile读取错误');
// 	}
// 	else{
// 		console.log(data + '第二次readFile读取成功');
// 	}
// });


//同步读取
// try{

// 	var data = fs.readFileSync('f.txt','utf-8');
// 	console.log(data + '同步读取，第三次读取')

// }catch(e){
// 	console.log(e);
// }


//尝试读取并写入另一个文件
fs.readFile('f.txt',function(err,data){
	if(err){
		console.log(err);
	}
	else{
	
		fs.appendFile('f副本.txt',data,function(err){
			// if(err){
			// 	console.log('文件添加异常');
			// }
			// else{
			// 	console.log('数据被添加到文件');
			// }
			if(err) throw err;
			console.log('数据被添加到文件');
		});
	}
});
// var buffer = new Buffer('0d');
// fs.appendFile('buffer.txt',buffer,function(err){
// 	if(err) throw err;
// 	console.log('创建成功');
// })

//fs部分方法的flag参数值列表：
// r:以读取模式打开文件
// r+:以读写模式打开文件
// w:以写入模式打开文件，如果文件不存在则创建
// w+:以读写模式打开文件，如果文件不存在则创建
// a:以追加模式打开文件，如果文件不存在则创建
// a+:以读取追加模式打开文件，如果不存在则创建
// mode:用于创建文件时给文件指定权限，默认是0666，回调函数将会传递一个文件描述符fd
// 	0666：文件权限值POSIX系统中对文件读取和访问权限的规范，通常用八进制数表示，
// 	如：0754标识文件，所有者权限是7(读，写，执行)，同组用户权限是5(读，执行) 其他用户的权限是4（读）
// 	fd:文件描述是一个非负整数，表示操作系统内核为当前进程所维护的打开文件的记录表索引
// 	