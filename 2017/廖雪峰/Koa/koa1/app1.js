
const Koa = require('koa');

const app = new Koa();

app.use(async(ctx,next)=>{

	if(ctx.request.path === '/'){
		ctx.response.body = 'index Page';
	}
	else{
		await next();
	}
});

app.use(async (ctx,next)=>{
	if(ctx.request.path === '/test'){
		ctx.response.body = 'test Page';
	}
	else{
		await next();
	}
});

app.use(async (ctx,next)=>{
	if(ctx.request.path === '/error'){
		ctx.response.body = 'error Page';
	}
	else{
		await next();
	}
});

app.listen(3000);