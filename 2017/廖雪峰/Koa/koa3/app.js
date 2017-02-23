

var Koa = require('koa');

var app = new Koa();

app.use(async function(ctx,next){
	await next();
	ctx.response.type = 'text/html';
});

app.use(async function(ctx,next){
	if(ctx.request.path === '/'){
		ctx.response.body = '<h1>index</h1>'
	}
	else{
		await next();
	}
});

app.use(async function(ctx,next){
	await next();

	if(ctx.request.path === '/err'){
		ctx.response.body = '<h1>Err</h1>'
	}
});

app.use(async function(ctx,next){
	if(ctx.request.path === '/server'){
		ctx.response.body = '<h1>server</h1>';
	}
})








app.listen(3000);
console.log('服务器已经开始运行，端口是3000...');