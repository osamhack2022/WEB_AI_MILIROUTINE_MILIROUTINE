const db = require('../db/config');
const data = require('../models/index');
const crypto = require('crypto');
const STRETCHINGKEY = 9999;

const makePasswordHashed = (plainPassword, salt) =>
    new Promise(async (resolve, reject) => {
        crypto.pbkdf2(plainPassword, salt, STRETCHINGKEY, 64, 'sha512', (err, key) => {
            if (err) reject(err);
            resolve(key.toString('base64'));
        });
    });

const saveSession = (req, res, rows) =>{
	req.session.user = rows[0];
	req.session.save();
	res.redirect('/');
}

const checkUserID = async (req, res) => {
	const userInfo = await data.user.get(req.body.id);
	
	if(userInfo.length > 0){
			// ID가 존재
			if(userInfo[0].pw == await makePasswordHashed(req.body.pw, userInfo[0].salt)){
				saveSession(req, res, userInfo);
			}
			else{
				return res.render('alert', {error: '비밀번호가 틀렸습니다!'});
			}
		}
		
	else{
		return res.render('alert', {error: '아이디가 존재하지 않습니다!'});
	}	

}


module.exports = {
	checkUserID
};