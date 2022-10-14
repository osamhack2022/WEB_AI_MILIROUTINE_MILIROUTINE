const jwt = require("jsonwebtoken");
const path = require('path');
const EXPIRETIMEOFMINUTE = 40; // 분 단위

require('dotenv').config({path:path.join(__dirname, '.env')});

const token = {
	create : (req, res, userId, userName) => {
		
		const token = jwt.sign({
			type: "JWT",
			id : userId,
			name : userName
		}, process.env.SECRET_KEY, {
			expiresIn: EXPIRETIMEOFMINUTE + "m",
		});
		
		
		return token;
	
	},
	
	decode : (token) => {
		if(!token){
			return res.status(419).json({
				msg : "토큰이 없거나 만료되었습니다."
			});
		}
		 return jwt.verify(token, process.env.SECRET_KEY);
	}
}

module.exports = {token};