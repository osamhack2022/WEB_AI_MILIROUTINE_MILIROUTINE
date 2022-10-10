const db = require('../db/config');
const data = require('../models/index');
const crypto = require('crypto');
const jwt = require('../token/jwt');
const STRETCHINGKEY = 9999;

var userId;
var param = [];

const createSalt = () =>
	new Promise((resolve,reject)=>{
		crypto.randomBytes(64, (err,buf)=>{
			if(err) reject(err);
			resolve(buf.toString('base64'));
		});
});

const createHashedPassword = (plainPassword) =>
    new Promise(async (resolve, reject) => {
        const salt = await createSalt(); 
        crypto.pbkdf2(plainPassword, salt, STRETCHINGKEY, 64, 'sha512', (err, key) => {
            if (err) reject(err);
            resolve({ password: key.toString('base64'), salt });
        });
    }); 

const user = {
	regist : async(req, res) => {
		// id, pw, email, name
		const { password, salt } = await createHashedPassword(req.body.pw);
		
		userId = req.body.id;
		param = [req.body.id, password, req.body.email, req.body.name, salt];
		
		var userInfoWithId = await data.user.get('id', req.body.id);
		var userInfoWithEmail = await data.user.get('email', req.body.email);

		if(userInfoWithId.length > 0){
			return res.json({
				msg : "이미 사용중인 아이디입니다!"
			})
		}
		
		if(userInfoWithEmail.length > 0){
			return res.json({
				msg : "이미 사용중인 이메일입니다!"
			})
		}
		
		
		return res.json({
			result : param,
			msg : "1차 회원가입 완료"
		})
		
		// go signmore
	},
	
	addInfo : async(req, res) => {
		data.user.add(param);
		
		var userInfo = await data.user.get('id', userId);
		const token = jwt.token.create(req, res, userInfo[0].id, userInfo[0].name);
		
		return res.json({
			token : token,
			user : userInfo[0],
			msg : "회원가입에 성공했습니다!"
		})
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

const page = {
	goSignup : (req, res) => {
		if(user.isToken(req, res)){
			return res.json({
				msg : "로그인이 되어있습니다!",
				isLogin : true
			})
		}
		
		else{
			return res.json({
				isLogin : false
			})
		}
	},
}



module.exports = {
    user,
	page
};