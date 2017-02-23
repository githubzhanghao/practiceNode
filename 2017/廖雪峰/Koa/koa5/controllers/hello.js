
var fn_hello = (ctx,next)=>{
	var name = ctx.params.name;
	ctx.response.body = `Hello，${name}`;
};

var fn_index = (ctx,next)=>{
	ctx.response.body = `<h1>welcome to my website</h1>`;
}

module.exports = {
	'GET /hello/:name':fn_hello,
	'GET /':fn_index,
	'GET /index':fn_index
}