const jwt = require('../token/jwt');

const user = {
	isToken : (req, res) => {
		try{
			if(req.headers.authorization && req.headers.authorization.split(' ')[1]){
				return true;
			}

			else{
				return false;
			}
		}
		
		catch(err){
			console.log(err);
			return false;
		}
		
	}
}

const page = {
	goHome : (req, res) => {
		let decoded;
		
		if(user.isToken(req, res)){
			const token = req.headers.authorization.split(' ')[1];
			decoded = jwt.token.decode(token);
			
			res.json({
				id : decoded.userId,
				name : decoded.userName,
				isLogin : true
			})
		}
		else{
			decoded = false;
			
			res.json({
				isLogin : false
			})
		}
	}
}

module.exports = {page};