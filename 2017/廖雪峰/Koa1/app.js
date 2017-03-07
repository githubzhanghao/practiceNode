
const Koa = require('koa');

const app = new Koa();

app.use(async (ctx,next)=>{
	ctx.response.type = 'text/html';
	
	if(ctx.request.path === '/'){
		ctx.response.body = '<h1>index</h1>';
	}
	else if(ctx.request.path === '/product'){
		ctx.response.body = '<h1>product</h1>';
	}
	await next();
});


app.use(async (ctx,next)=>{
	ctx.response.body = '<h1>111</h1>';

});
app.listen(3000);