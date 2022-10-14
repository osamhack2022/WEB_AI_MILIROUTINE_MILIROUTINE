const db = require('../db/config');
const data = require('../models/index');
const crypto = require('crypto');
const jwt = require('../token/jwt');
const STRETCHINGKEY = 9999;

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
		const { password, salt } = await createHashedPassword(req.body.pw);
		
		const userId = req.body.id;
		const userPassword = password;
		const userEmail = req.body.email;
		const userName = req.body.name;

		const param = [userId, userPassword, userEmail, userName, salt]
		
		for(const item of param){
			if(!item){
				return res.status(401).json({
					err : item + "의 값이 없습니다!"
				})
			}
		}
		
		const userInfoWithId = await data.user.get('id', req.body.id);
		const userInfoWithEmail = await data.user.get('email', req.body.email);

		if(userInfoWithId.length > 0){
			return res.status(401).json({
				err : "이미 사용중인 아이디입니다!"
			})
		}
		
		if(userInfoWithEmail.length > 0){
			return res.status(401).json({
				err : "이미 사용중인 이메일입니다!"
			})
		}
		
		data.user.add(param);
		
		const token = jwt.token.create(req, res, userId, userName);
		
		return res.json({
			token : token,
			user : param,
			msg : "회원가입에 성공했습니다!"
		})
	},
	
	addInfo : async(req, res) => {
		if(!user.isToken(req, res)){
			const token = req.headers.authorization.split(' ')[1]
			const userId = jwt.decode(token).id
		}
		else{
			return res.status(401).json({
				err : "회원가입을 먼저 해주세요!"
			})
		}
		
		const user_no = await data.user.get('id', userId).no;
		
		data.user_category.add(user_no, req.body.category);
		
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