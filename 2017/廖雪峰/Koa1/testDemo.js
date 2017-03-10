
const Koa = require('koa');

const app = new Koa();

const router = require('koa-router')();

var count = {
	a:0,
	b:0,
	c:0
}

router.get('/:name',(ctx,next)=>{
	ctx.response.type = 'text/html';
	const name = ctx.params.name || "";
	ctx.response.body = JSON.stringify(count);
	if(name == 'a'||name == 'c'||name == 'b'){
		count[name]++;
		ctx.response.body = `<h1>a:${count['a']} </h1>
		<h1>b:${count['b']} </h1>
		<h1>c:${count['c']} </h2>`;
	}
	else{
		ctx.response.body = '<h1>地址错误</h1>';
	}

});
app.use(router.routes());
app.listen(3000);