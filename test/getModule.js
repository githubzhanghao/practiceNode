
// var myModule1 = require('./myModule');

// myModule1.setName('1111');


// var myModule2 = require('./myModule');

// myModule2.setName('2222');


// myModule1.sayHello();
// myModule2.sayHello();


var Hello = require('./myModule1');

var hello1 = new Hello();

hello1.setName('11111');


var hello2 = new Hello();

hello2.setName('22222');

hello1.sayHello();
hello2.sayHello();