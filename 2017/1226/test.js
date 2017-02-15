/*
//将在下一轮事件循环中调用
process.nextTick(function(){
	console.log('nextTick callback!');
});
//在程序即将退出时的回调函数
process.on('exit',function(code){
	console.log('about to exit with code : ' +code);
})
console.log('nextTick was set!');

*/
//判断是node环境还是浏览器环境
if(typeof(window) === 'undefined'){
	console.log('node.js');
}
else{
	console.log('browser');
}

