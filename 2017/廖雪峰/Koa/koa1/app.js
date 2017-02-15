
/*
const Koa = require('koa');


//创建一个Koa对象表示web app本身
const app = new Koa();

//对于任何请求，app将调用异步函数处理请求;
app.use(async(ctx,next)=>{
	await next();
	ctx.response.type = 'text/html';
	ctx.response.body = '<h1>Hello,koa2</h1>';
});

//在端口3000监听
app.listen(3000);
console.log('app started at port 3000'); 
*/

const Koa = require('koa');

//创建一个Koa对象表示web app本身
const app = new Koa();

app.use(async(ctx,next)=>{
	console.log(`${ctx.request.method} ${ctx.request.url}`);
	await next();
});


app.use(async(ctx,next)=>{
	const start = new Date().getTime();

	await next();
	const ms = new Date().getTime() - start;

	console.log(`Time:${ms}ms`);
});

app.use(async(ctx,next)=>{
	// await next();
	ctx.response.type = 'text/html';
	ctx.response.body = '<h1> Hello,koa2!</h1>';
	console.log(`second await`);
});

app.listen(3000);
console.log('app started at port 3000'); 
















