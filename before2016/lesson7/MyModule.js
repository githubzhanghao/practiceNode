/**
 * Created by Administrator on 2016/8/15.
 */

var name;
exports.setName = function(theName){
    name = theName;
}
exports.sayHello = function(){
    console.log('hello guys my name is ' + name);
}