
var util = require('util');

function Base(){
	this.name = 'base';
	this.base = 2016;
	this.sayHello = function(){
		console.log('hello '+this.name + 'this year is '+ this.base);
	};
}
Base.prototype.showName = function(){
	console.log(this.name);
}


function Sub(){
	this.name = 'sub';
}

util.inherits(Sub,Base);

//原有输出
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

//继承后的子类输出
var objSub = new Sub();
objSub.showName();
// objSub.sayHello();//执行这句代码 会报错，inherits只会继承原型上面的东西
console.log(objSub);




//将一任意对象转换成字符串的方法
// util.inspect(object,[showHidden],[depth],[colors])
// showHidden 如果是true，将会输出更多隐藏信息
// depth  对象递归的层数(有些对象比较复杂)
// colors 多种颜色显示(true,false)