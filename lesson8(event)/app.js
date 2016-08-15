/**
 * Created by Administrator on 2016/8/15.
 */

// console.log('ok');

/**
 *在Node.js中如何注册一个事件
 *
 */

/*var EventEmitter = require('events').EventEmitter;

var a = new EventEmitter;
a.on('myEvent',function(){
    console.log('myEvent starting...');
});

process.nextTick(function(){
    a.emit('myEvent');
})*/


/*//执行错误。。。待修改
var MyClass = require('./Test');
var aa = new MyClass;
aa.on('myEvent1',function(){
    console.log('111');
});
console.log(aa);
process.nextTick(function(){
    aa.emit('myEvent1');
})*/
