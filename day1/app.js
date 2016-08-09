/**
 * Created by Administrator on 2016/8/9.
 */
/*
* 创建一个简历的HttpServer
*
* */

var httpServer = require('http') //导入Node.js库中的Http的库文件并获取句柄
var server = httpServer.createServer(function(request,response){

    console.log('Get An Client Request');
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("hello world");
    response.end("Ok");

    console.log('Request Response Ok');
})
server.listen(3000);
console.log('server started...');