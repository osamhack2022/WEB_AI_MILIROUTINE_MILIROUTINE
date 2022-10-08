const jwt = require("jsonwebtoken");
const path = require('path');

require('dotenv').config({path:path.join(__dirname, '.env')});

const token = {
	create : (req, res, userId, userName) => {
		
		const token = jwt.sign({
			type: "JWT",
			id : userId,
			name : userName
		}, process.env.SECRET_KEY, {
			expiresIn: "40m"
		});
		
		res.cookie('token', token);
	
	},
	
	decode : (token) => {
		 return jwt.verify(token, process.env.SECRET_KEY);
	}
}

module.exports = {token};