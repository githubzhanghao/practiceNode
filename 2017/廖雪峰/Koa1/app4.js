

const Koa = require('koa');

const router = require('koa-router')();

const cors = require('koa-cors');

const bodyparser = require('koa-bodyparser');

const app = new Koa();

router.get('/',(ctx,next)=>{
	ctx.response.type = 'text/html';
	ctx.response.body = `
		<h1>注册页面</h1>
		<form action='/singin' method='post'>
			用户名：<input type='text' name='user'>
			密码：<input type='password' name='pwd'>
			<button type='submit'>提交</button>
		</form>
	`;
});

router.post('/singin',(ctx,next)=>{
	let name = ctx.request.body.user || '';
	let pwd = ctx.request.body.pwd || '';
	ctx.response.type ='text/html';
	if(name == 'ryze' && pwd == '123123'){
		ctx.response.body = `Welcome,${name}`;
	}
	else{
		ctx.response.body = `<h1>登录失败</h1><a href='/'>重新登录</a>`;
	}

});
app.use(bodyparser());
app.use(router.routes());
app.listen(3000);
console.log('kaishi....3000');

