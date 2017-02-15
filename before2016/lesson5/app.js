/**
 * Created by Administrator on 2016/8/10.
 */

var http = require('http');
var qs = require('querystring');

function routeHandle(path,request){

    if(request.url == '/login'  && request.method.toLowerCase() == 'post'){
        console.log('获取login的post 请求');
        return 'post请求';
    }
    return 'get 请求'
}
function onRequest(request,response){
    response.writeHead(200,{
        'Content-Type':'text/plain'
    });
    // console.log(request.url);
    // console.log(request.method);

    if(request.url == '/login'  && request.method.toLowerCase() == 'post'){
        var postData = '';
        request.addListener('data',function(data){
            postData += data;
            console.log('获取post参数中...');
        });
        request.addListener('end',function(){
            console.log('获取post参数成功');

            var content = qs.parse(postData)['num']
            console.log(content)
            response.write(content)
            response.end();
        })
    }
    else{
        response.write('other method ');
        response.end();
    }
}

var server = http.createServer(onRequest);
server.listen(3000);

console.log('server is Listening...');