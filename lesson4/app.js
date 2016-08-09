/**
 * Created by Administrator on 2016/8/9.
 */

/*

 */

var http = require('http');

var handlePaths = [];

/**
 * 初始化路由
 */
function initRoute(){
    handlePaths.push('/');
    handlePaths.push('/login');//登录
    handlePaths.push('/register');//注册
}

/**
 * 处理路由的逻辑
 * @param path
 */
function routeHandle(path){
    //遍历路由配置信息
    for(var i in path){
        // handlePaths[i]
        if(handlePaths[i] == path){
            console.log('获取到相同的路由信息',handlePaths[i]);
            return handlePaths[i];
        }
    }

    return '404 Not Found';
}

/**
 * 服务器回调函数
 * @param request
 * @param response
 */
function onRequest(request,response){

    var requestPath =request.url;
    console.log('请求的路径是==> '+ requestPath);

    response.writeHead(200,{
        'Content-Type':'text/plain'
    });
    // response.setEncoding('utf-8');
    var responseContent = routeHandle(requestPath);

    response.write('访问的页面是：<b>'+responseContent+'</b>');
    response.end();
}

var server = http.createServer(onRequest).listen(3000);
initRoute();
console.log('server is listening right now...');