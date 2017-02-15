
var EventEmitter = require('events').EventEmitter;

var event = new EventEmitter;

event.on('s',function(){
	console.log(111);
})

setInterval(function(){
	event.emit('s');
},1000);
