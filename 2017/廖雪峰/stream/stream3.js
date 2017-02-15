
var fs = require('fs');

var rs = fs.createReadStream('write.txt');

var ws = fs.createWriteStream('pipe.txt');

rs.pipe(ws);