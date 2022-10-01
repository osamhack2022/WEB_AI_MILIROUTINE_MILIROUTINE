const page = {
	goHome : (req, res) =>{
		res.redirect('/');
	}
}


const session = {
	checkHaveSession : (req) => {
		if(req.session.user){
			return true;
		}
		
		else{
			return false;
		}
	}
}

const user = {
	destroy : (req, res) => {
		if(session.checkHaveSession){
			req.session.destroy(err => {if(err) console.log(err)});
			return res.render('alert', {error: '로그아웃 되었습니다!'});
		}
		
		page.goHome(req, res);
	}
}

module.exports = {
	page,
	user
}