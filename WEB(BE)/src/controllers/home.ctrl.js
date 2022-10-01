const page = {
	showHome : (req, res) => {
		res.render('index', {session : req.session});	
	}
}

module.exports = {page};