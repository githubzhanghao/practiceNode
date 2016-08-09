/**
 * Created by Administrator on 2016/8/9.
 */

var http = require('http');
var url = require('url');
var qs = require('querystring');//解析参数的库
http.createServer(onRequest).listen(3000);

/**
 * 客户端请求的函数
 * @param req
 * @param resp
 */
function onRequest(req,resp){

    //console.log(req.url);
    //第一种方式获取参数   利用querystring 模块的方式获取参数的方法
    var arg = url.parse(req.url).query;
    console.log(arg);
    var nameValue = qs.parse(arg)['name'];
    var ageValue = qs.parse(arg)['age'];
    console.log(nameValue+'-------'+ageValue);

    //第二种方式 //利用url模块的parse方法
    var arg2 = url.parse(req.url,true).query;
    console.log(arg2);
    var nameValue2 = arg2.name;
    var ageValue2 = arg2.age;
    console.log(nameValue2+'------------'+ageValue2);


    console.log('==============');

    resp.writeHead(200);
    resp.write('hello nodejs');
    resp.end();
}