
var events = require('events');
//实例化事件对象
var emitter = new events.EventEmitter();
//注册事件监听1
emitter.once('someEvent',function(arg1,arg2){
	console.log('listenner1',arg1,arg2);
});
//注册事件监听2
emitter.on('someEvent',function(arg1,arg2){
	console.log('Listenner2',arg1,arg2);
});

//触发事件
emitter.emit('someEvent','hulk',1991);

emitter.emit('error');//error是node内部定义的一个程序错误会触发的事件
