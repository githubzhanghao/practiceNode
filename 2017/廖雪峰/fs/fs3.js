
var fs = require('fs');

//同步读取
var data = fs.readFileSync('test.txt','utf-8');

console.log(data);
