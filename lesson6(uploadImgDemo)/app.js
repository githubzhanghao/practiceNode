/**
 * Created by Administrator on 2016/8/10.
 */

var formidable = require('formidable');

var http = require('http');

var sys = require('sys');

http.createServer(function(request,response){

    if(request.url == '/upload' && request.method.toLowerCase() == 'post'){
        console.log('upload request');
        uploadRequest(request,response);
        return;
    }

    enterRequest(request,response);

}).listen(3000);

function enterRequest(request,response){
    response.writeHead(200,{
        'Content-Type':'text/html'
    });
    response.end(
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
        '<input type="text" name="title" /><br/>'+
        '<input type="file" name="upload" multiple="multiple"/><br/>'+
        '<input type="submit" value="Upload Now" />'+
        '</form>'
    );
}

/**
 * 处理上传的逻辑
 * @param request
 * @param response
 */
function uploadRequest(request,response){
    var form = new formidable.IncomingForm();
    form.parse(request,function(err,fields,files){
        response.writeHead(200,{
            'Content-Type':'text/plain'
        });
        console.log('reviced upload file');

        response.end(sys.inspect({
            fields:fields,
            files:files
        }))
    })
}