const jwt = require('../token/jwt');

const page = {
	showHome : (req, res) => {
		const token = req.cookies.token;
		
		let decoded;
		
		if(token){
			decoded = jwt.token.decode(token);
		}
		else{
			decoded = false;
		}
		
		// res.render('index', {user : decoded});	
	}
}

module.exports = {page};