
const Koa = require('koa');

const router = require('koa-router')();

const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(async (ctx,next)=>{
	await next();
	ctx.request.type = 'text/html';
	console.log(`Process ${ctx.request.path}`);
});


router.get('/',(ctx,next)=>{
	ctx.response.body = `<h1>登录页面</h1>
		<form action='/sigin' method='post'>
			用户名：<input name='user' placeholder='用户名'> <br/>
			密码：<input name='pwd' placeholder='密码' type='password'>
			<input type='submit' value='登录'>
		</form>`;
});

router.post('/sigin',(ctx,next)=>{
	var name = ctx.request.body.user || '',
		pwd = ctx.request.body.pwd || '';

	if(name === 'Ryze' && pwd === '123123'){
		ctx.response.body = `<h1>hello,${name}</h1>`;
	}
	else{
		ctx.response.body = `<h1>your password or username is error!</h1>
		<a href='/'>Try agin</a> `;
	}
});

app.use(bodyParser());
app.use(router.routes());

app.listen(3000);

console.log('server is starting at port 3000...');





