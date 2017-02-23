
var fn_index = async (ctx,next)=>{
	ctx.response.body = '<h1>Index</h1>'+`
		<form action='/signin' method='post'>
			用户名：<input name='user' type='text'>
			密码： <input name='pwd' type='password'>
			<input type='submit' value='提交'>
		</form>
	`;
};

var fn_signin = async (ctx,next) =>{
	var name = ctx.request.body.user || '',
		pwd = ctx.request.body.pwd || '';
	console.log(`账号：${name},密码：${pwd} 请求登录～～`);
	if(name === 'ryze' && pwd === '123123'){
		ctx.response.body = `<h1>welcome,${name}</h1>`;
	}
	else{
		ctx.response.body = '<h1>Login failed!</h1>'+`<p>
		<a href='/'>Try agagin </a>
		</p>`;
	}
};


module.exports = {
	'GET /':fn_index,
	"POST /signin":fn_signin
}



