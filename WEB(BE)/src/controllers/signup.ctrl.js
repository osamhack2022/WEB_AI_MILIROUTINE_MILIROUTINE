const db = require('../db/config');
const data = require('../models/index');
const crypto = require('crypto');
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

const session = {
	checkHaveSession : (req) => {
		if(req.session.user){
			return true;
		}
		
		else{
			return false;
		}
	},
	
	saveSession : (req, rows) =>{
		req.session.user = rows[0];
		req.session.save();
	}
}

const page = {
	goHome : (req, res) =>{
		res.redirect('/');
	},
	
	showSignup : (req, res) =>{
		res.render('signup');
	},
	
	showSignmore : (req, res)=>{
		if(session.checkHaveSession(req)){
			res.render('signmore');
		}
		else{
			return res.render('alert', {error: '로그인을 해주세요!'});
		}
	}
}

const user = {
	regist : async(req, res) => {
		const { password, salt } = await createHashedPassword(req.body.pw);
	
		var param = [req.body.id, password, req.body.email, salt, 'NULL', 'NULL'];

		var userInfo = await data.user.get(req.body.id);

		if(userInfo.length > 0){
			return res.render('alert', {error: '아이디가 이미 존재합니다!'});
		}

		data.user.add(req.body.id, param);

		userInfo = await data.user.get(req.body.id);
		session.saveSession(req, userInfo);

		res.redirect('/signup/more');
	},
	
	addInfo : (req, res) => {
		page.goHome(req, res);
	}
}


module.exports = {
	page,
    user
};