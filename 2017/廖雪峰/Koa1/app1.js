
const Koa = require('koa');

const app = new Koa();

const router = require('koa-router')();

const bodyParser = require('koa-bodyparser');

router.get('/',async (ctx,next)=>{
	ctx.response.type = 'text/html';
	ctx.response.body = '<h1>主页</h1>';
});

router.get('/hello/:name',async (ctx,next)=>{
	let name = ctx.params.name;\
	ctx.response.body = `<h1>${name}</h1>`;
	
});

router.post('/singin',async (ctx,next)=>{
	let name = ctx.request.body.name || '';
	let pwd = ctx.request.body.password || '';

	if(name === 'Ryze' || pwd === '123123'){
		ctx.response.body = `<h1>${name}:${pwd}</h1>`;
	}
});

app.use(router.routes());

app.listen(3000);