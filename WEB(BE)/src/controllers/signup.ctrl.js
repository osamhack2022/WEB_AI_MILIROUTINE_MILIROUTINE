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

const page = {
	goHome : (req, res) =>{
		res.redirect('/');
	},
	
	showSignup : (req, res) =>{
		res.render('signup');
	},
	
	showSignmore : (req, res)=>{	
		res.render('signmore');
	}
}

const user = {
	regist : async(req, res) => {
		const { password, salt } = await createHashedPassword(req.body.pw);
		
		userId = req.body.id;
		param = [req.body.id, password, req.body.email, req.body.name, salt];
		
		var userInfoWithId = await data.user.get('id', req.body.id);
		var userInfoWithEmail = await data.user.get('email', req.body.email);

		if(userInfoWithId.length > 0){
			return res.render('alert', {error: '이미 사용중인 아이디입니다'});
		}
		
		if(userInfoWithEmail.length > 0){
			return res.render('alert', {error: '이미 가입된 이메일입니다'});
		}
		
		
		 // res.redirect('/signup/more/' + userId);
	},
	
	addInfo : async(req, res) => {
		data.user.add(param);
		
		var userInfo = await data.user.get('id', userId);
		jwt.token.create(req, res, userInfo[0].id, userInfo[0].name);
		page.goHome(req, res);
	}
}


module.exports = {
	page,
    user
};