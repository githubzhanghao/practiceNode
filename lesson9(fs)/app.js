/**
 * Created by Administrator on 2016/8/15.
 */

var fs = require('fs');

/*
//不带有Sync(同步)的 都是异步读取
fs.readFile('a.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});
console.log('app started');*/
/**
 * readFileSync 是 同步读取
 */
var rlt = fs.readFileSync('a.txt');
console.log('rlt====>' + rlt);
console.log('app started');