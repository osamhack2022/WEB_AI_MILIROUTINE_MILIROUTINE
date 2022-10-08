const db = require('../db/config');
const data = require('../models/index');
const crypto = require('crypto');
const jwt = require('../token/jwt');
const STRETCHINGKEY = 9999;

const createHashedPasswordWithSalt = (plainPassword, salt) =>
    new Promise(async (resolve, reject) => {
        crypto.pbkdf2(plainPassword, salt, STRETCHINGKEY, 64, 'sha512', (err, key) => {
            if (err) reject(err);
            resolve(key.toString('base64'));
        });
    });

const page = {
	
	goHome : (req, res) =>{
		res.redirect('/');
	},
	
	showLogin : (req, res) =>{
		if(user.isToken(req, res)){
			return res.render('alert', {error: '이미 로그인 되어있습니다!'});
		}
		else{
			res.render('login');
		}	
	}
}

const user = {
	
	checkUserInfo : async(req, res) => {
		const userInfo = await data.user.get('id', req.body.id);
		
		if(!user.isToken(req, res)){
			if(userInfo.length > 0){
				// ID가 존재
				if(userInfo[0].pw == await createHashedPasswordWithSalt(req.body.pw, userInfo[0].salt)){
					jwt.token.create(req, res, userInfo[0].id, userInfo[0].name);

					page.goHome(req, res);
				}
				else{
					return res.render('alert', {error: '비밀번호가 틀렸습니다!'});
				}
			}

			else{
				return res.render('alert', {error: '아이디가 존재하지 않습니다!'});
			}	
		}
		
		else{
			return res.render('alert', {error: '이미 로그인 되어있습니다!'});
		}

	},
	
	isToken : (req, res) => {
		if(req.cookies.token){
			return true;
		}
		
		else{
			return false;
		}
	}
}


module.exports = {
	page,
	user
};