

var signin = async (ctx,next)=>{
	var email = ctx.request.body.email || '',
		password = ctx.request.body.password||'';

	if(email === '459791911@qq.com' && password === '123123'){

		ctx.render('signin-ok.html',{
			title:'Sign In Ok',
			name : 'Mr Node'
		});
	}
	else{

		ctx.render('signin-failed.html',{
			title:'Sign In Failed'
		})
	}
}