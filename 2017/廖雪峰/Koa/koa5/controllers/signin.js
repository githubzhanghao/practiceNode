
var fn_signin = (ctx,next)=>{
	ctx.response.body = `
		<form method = 'post' action = '/submit'>
			账号：<input name='user'> <br/>
			密码：<input name='pwd' type='password'><br/>
			<input type='submit' value='submit'>
		</form>
	`;
};

var fn_submit = (ctx,next)=>{
	
	var name = ctx.request.body.user || '',
		pwd = ctx.request.body.pwd || '';
	console.log(`${name}+${pwd},访问`);
	if(name === 'ryze' && pwd === '123123'){
		ctx.response.body = `success,${name}`;
	}
	else{
		ctx.response.type = 'text/html';
		ctx.response.body = `error! <a href='/signin'>please try again!</a>`;
	}
}

module.exports = {
	'GET /signin':fn_signin,
	'POST /submit':fn_submit
}