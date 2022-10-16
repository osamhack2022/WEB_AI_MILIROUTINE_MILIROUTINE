const data = require('../models/index');
const jwt = require('../token/jwt');
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

const createHashedPasswordWithSalt = (plainPassword, salt) =>
    new Promise(async (resolve, reject) => {
        crypto.pbkdf2(plainPassword, salt, STRETCHINGKEY, 64, 'sha512', (err, key) => {
            if (err) reject(err);
            resolve(key.toString('base64'));
        });
    });

const output = {
	mine : async (req, res)=>{
		if(!user.isToken(req, res)){
			return res.json({
				err : '로그인을 해주세요!',
				isLogin : false
			})
		}
		
		const token = req.headers.authorization.split(' ')[1];
		const decoded = jwt.decode(token);
		
		const host = decoded.no;
		
		const param = await data.routine.get('host', host);
		
		res.json({
			routine : param
		})
	},
	
	like : async (req, res)=>{
		if(!user.isToken(req, res)){
			return res.status(403).json({
				err : '로그인을 해주세요!',
				isLogin : false
			})
		}
		
		const token = req.headers.authorization.split(' ')[1];
		const decoded = jwt.decode(token)
		
		const myRoutine = await data.user_routine.get('user_no',40)
		const likeRoutineId = [];
		
		for(const routine of myRoutine){
			if(routine.type == 'like'){
				likeRoutineId.push(routine.routine_id);
			}
		}
		
		res.json({
			msg : '좋아요한 루틴 추출 완료!',
			likeRoutineID : likeRoutineId
		})
	},
	
	auth : (req, res) => {
		const routine = data.routine.get('id', req.params.userId);
		
		res.json({
			routine : routine
		})
	}
}

const user = {
	setInfo : (req, res) =>{
		if(!user.isToken(req, res)){
			return res.status(403).json({
				err : '로그인을 해주세요!',
				isLogin : false
			})
		}
		
		const token = req.headers.authorization.split(' ')[1];
		const decoded = jwt.decode(token)
		
		if(req.body.name){
			data.user.update('nickname', req.body.name, decoded.id);
		}
		else{
			return res.status(401).json({
				err : '닉네임을 입력해주세요!'
			})
		}
		
		if(req.body.category){
			data.user_category.update('category', req.body.category, decoded.no);
		}
		else{
			return res.satus(401).json({
				err : '카테고리를 선택해주세요!'
			})
		}
		
		return res.json({
			msg : '닉네임 수정 완료!'
		})
	},
	
	setPassword : async (req, res) => {
		if(!user.isToken(req, res)){
			return res.status(403).json({
				err : '로그인을 해주세요!',
				isLogin : false
			})
		}
		
		if(!req.body.pw){
			return res.status(401).json({
				err : '새로운 비밀번호를 입력해주세요!'
			})
		}
		
		const token = req.headers.authorization.split(' ')[1];
		const decoded = jwt.decode(token)
		
		const originalPw = await createHashedPasswordWithSalt(data.user.get('id', decoded.id).pw, data.user.get('id', decoded.id).salt) ;
		
		if(req.body.pw != originalPw){
			const { password, salt } = await createHashedPassword(req.body.pw);
			
			data.user.update('pw', password, decoded.id);
			data.user.update('salt', salt, decoded.id);
			
			return res.json({
				msg : '비밀번호 수정 완료!'
			})
		}
		
		else{
			return res.status(401).json({
				err : '원래 비밀번호와 같습니다!'
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

const routine = {
	auth : (req, res) => {
		
		if(!user.isToken(req, res)){
			return res.status(403).json({
				err : '로그인을 해주세요!',
				isLogin : false
			})
		}
		
		const token = req.headers.authorization.split(' ')[1];
		const decoded = jwt.decode(token)
		
		try{
			const user_no = decoded.id;
			const routine_id = req.params.routineId;
			/* week, day, date, img ,text 받아오기 */
			const week = req.body.week;
			const day = req.body.day;
			const date = req.body.date; 
			const img = req.body.img;
			const text = req.body.text;

			const param = [user_no, routine_id, week, day, date, img, text]
			data.auth.add(param);
			
			return res.json({
				msg : 'routine 인증 완료!'
			})
		}
		catch{
			return res.status(401).json({
				msg : 'routine 인증 실패!'
			})
		}
	}
}

module.exports = {
	output,
	user,
	routine
}