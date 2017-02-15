
var name;

exports.setName = function(thName){
	name = thName;
}

exports.sayHello = function(){
	console.log('hello ' + name);
}