const data = require('../models/index');
const jwt = require('../token/jwt');

const output = {
	mine : (req, res)=>{
		if(!user.isToken(req, res)){
			return res.json({
				err : 'Token is Expired or Please Login',
				isToken : false
			})
		}
		
		const token = req.headers.authorization.split(' ')[1];
		const host = data.user.get('id', jwt.decode(token).id).no;
		
		const param = data.routine.get('host', host);
		
		res.json({
			routine : param
		})
	}
}

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

module.exports = {
	output
}