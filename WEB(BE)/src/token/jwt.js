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
			return res.status(403).json({
				msg : "토큰이 없거나 만료되었습니다."
			});
		}
		 return jwt.verify(token, process.env.SECRET_KEY);
	}
}

module.exports = {token};