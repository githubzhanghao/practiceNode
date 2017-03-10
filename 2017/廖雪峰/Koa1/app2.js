
const Koa = require('koa');

const router = require('koa-router')();

const bodyparser = require('koa-bodyparser');

const app = new Koa();

router.post('/singin',(ctx,next)=>{

	var name = ctx.request.body.user || '';
	var pwd  = ctx.request.body.pwd || "";

	if(name === 'ryze' && pwd === '123123'){
		ctx.response.type = 'application/json';
		// ctx.reponse.head = 200;
		ctx.response.body = {
			status:true,
			message:'登录成功'
		}
	}
});

router.get('/login',(ctx,next)=>{
	ctx.response.type = 'text/html';
	ctx.response.body = `<form method='post' action='/singin'>
		<input name='user'><br>
		<input name='pwd' type='password'>
		<button type='submit'>登录</button>
	</form>`
});

app.use(bodyparser());
app.use(router.routes());

app.listen(3000);

console.log('服务器开始运行。。。');