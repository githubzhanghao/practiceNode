/**
 * Created by Administrator on 2016/8/15.
 */
var EventEmitter = require('events').EventEmitter;

var MyClass = function(){
    //.....
}

MyClass.prototype.__proto__ = EventEmitter.prototype;