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

const user = {
	
	checkUserInfo : async(req, res) => {
		
		if(!req.body.id){
			return res.status(401).json({
				err : "ID가 없습니다."
			})
		}
		
		const userInfo = await data.user.get('id', req.body.id);

		if(!user.isToken(req, res)){
			if(userInfo.length > 0){
				// ID가 존재
				if(userInfo[0].pw == await createHashedPasswordWithSalt(req.body.pw, userInfo[0].salt)){
					const token = jwt.token.create(req, res, userInfo[0].no, userInfo[0].id, userInfo[0].name);
					
					return res.json({
						token : token, // token을 전달하고 client가 token을 헤더에 저장
						user : userInfo[0],
						msg : "로그인에 성공했습니다!"
					});
				}
				else{
					return res.status(401).json({
						err : "비밀번호가 틀렸습니다!"
					})
				}
			}

			else{
				return res.status(401).json({
					err : "아이디가 존재하지 않습니다!"
				})
			}	
		}
		
		else{
			return res.status(403).json({
				err : "이미 로그인 되어있습니다!",
				isLogin : true
			})
		}

	},
	
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
	user
};