const jwt = require("jsonwebtoken");
const path = require('path');
const expireTimeOfMinute = 40; // 분 단위

require('dotenv').config({path:path.join(__dirname, '.env')});

const token = {
	create : (req, res, userId, userName) => {
		
		const token = jwt.sign({
			type: "JWT",
			id : userId,
			name : userName
		}, process.env.SECRET_KEY, {
			expiresIn: expireTimeOfMinute + "m",
		});
		
		res.cookie('token', token, {maxAge :  1000 * 60 * expireTimeOfMinute});
	
	},
	
	decode : (token) => {
		if(!token){
			console.log('gone token');
			return;
		}
		 return jwt.verify(token, process.env.SECRET_KEY);
	}
}

module.exports = {token};