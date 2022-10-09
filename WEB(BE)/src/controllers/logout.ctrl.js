const page = {
	goHome : (req, res) =>{
		res.redirect('/');
	}
}

const user = {
	destroy : (req, res) => {
		res.clearCookie('token');
		
		return res.status(201).json({
			msg : "로그아웃 완료"
		})
		
		// page.goHome(req, res);
	}
}

module.exports = {
	page,
	user
}