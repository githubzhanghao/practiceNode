/**
 * Created by Administrator on 2016/8/15.
 */

var myMD1 = require('./MyModule');

myMD1.setName('niu');
// myMD1.sayHello();

var myMD2 = require('./MyModule');

myMD2.setName('niu2');//使用niu2赋值

//使用MD1方法调用
// myMD1.sayHello();

var Hello = require('./MyModule2');

var hello = new Hello();
hello.setName('niu');
hello.sayHello();