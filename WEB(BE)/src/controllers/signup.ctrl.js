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

async function registUser(req, res){
	const { password, salt } = await createHashedPassword(req.body.pw);
	
	var param = [req.body.id, password, req.body.name, req.body.unit, req.body.email, salt];
	
	const userInfo = await data.user.get(req.body.id);
	
	if(userInfo.length > 0){
		return res.render('alert', {error: '아이디가 이미 존재합니다!'});
	}
	
	data.user.add(req.body.id, param);
	
	res.redirect('/');
}

module.exports = {
    registUser
};