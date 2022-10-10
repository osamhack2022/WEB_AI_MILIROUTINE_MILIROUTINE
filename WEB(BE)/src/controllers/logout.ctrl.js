const page = {
	goHome : (req, res) =>{
		res.redirect('/');
	}
}

const user = {
	destroy : (req, res) => {
		res.clearCookie('token');
		page.goHome(req, res);
	}
}

module.exports = {
	page,
	user
}