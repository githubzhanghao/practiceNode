
const Koa = require('koa');

const app = new Koa();

const router = require('koa-router')();

const bodyParser = require('koa-bodyparser');

router.get('/',async (ctx,next)=>{
	ctx.response.type = 'text/html';
	ctx.response.body = '<h1>主页</h1>';
});

router.get('/hello/:name',async (ctx,next)=>{
	let name = ctx.params.name;
	ctx.response.body = `<h1>${name}</h1>`;
});

router.get('/login',async (ctx,next)=>{
	ctx.response.body = `
	<form action='/singin' method='post'>
		<div>
			账号:<input type='text' name='user'>
		</div>
		<div>
			密码:<input type='password' name='pwd'>
		</div>
		<button type='submit'>登录</button>
	</form>`;
});

router.post('/singin',async (ctx,next)=>{
	let name = ctx.request.body.user || '';
	let pwd = ctx.request.body.pwd || '';

	if(name === 'Ryze' || pwd === '123123'){
		ctx.response.body = `<h1>${name}:${pwd}</h1>`;
	}
	else{
		ctx.response.body = `<h1>账号或密码错误</h1>
			<a href='/login'>Try again</a>
		`;
	}
});
app.use(bodyParser());
app.use(router.routes());

app.listen(3000);