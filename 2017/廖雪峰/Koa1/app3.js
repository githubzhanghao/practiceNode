
const Koa = require('koa');


const router = require('koa-router')();

const cors = require('koa-cors');

const bodyparser = require('koa-bodyparser');

const app = new Koa();

app.use(cors());

router.get('/singin',(ctx,next)=>{
	
	let name = ctx.request.body.name || '';
	let pwd = ctx.request.body.pwd || '';
	if(name === 'ryze' && pwd === '123123'){
		ctx.response.type = 'text/html';
		ctx.response.body = '<h1>登录成功</h1>';
	}
	else{
		ctx.response.type = 'text/html';
		ctx.response.body = '<a href="http://192.168.0.137:3000/login" >重新登录</a>';
	}

});





app.use(bodyparser());
app.use(router.routes());

app.listen(3000);