const data = require('../models/index');
const jwt = require('../token/jwt');

const maxStep = 5;

const user = {
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
		
	},
	
	getId : (req, res) => {
		if(!user.isToken(req, res)){
			res.json({
				err : '로그인을 해주세요!',
				isLogin : false
			})
		}
		
		const token = req.headers.authorization.split(' ')[1];
		const decode = jwt.token.decode(token);
		
		return decode.id;
	}
}

const routine = {
	make : (req, res) =>{
		
		if(!user.isToken(req, res)){
			return res.status(403).json({
				err : "로그인을 해주세요!",
				isLogin : false
			})
		}
		
		var auth_description_list = [req.body.auth_description_1, req.body.auth_description_2, req.body.auth_description_3, req.body.auth_description_4, req.body.auth_description_5];
		
		let i = 0;
		for(const item of auth_description_list){
			if(!item){
				auth_description_list.length = i;
				break;
			}
			i++;
		}
		
		const host = data.user.get('id',user.getId(req, res)).no;
		const name = req.body.name;
		const category = req.body.category;
		const image = req.body.fileUrl; //`/images/${req.file.filename}`
		const auth_cycle = req.body.auth_cycle;
		const auth_description = JSON.stringify(auth_description_list);
		const start_date = req.body.start_date;
		const duration = req.body.duration;
		const point_info_list = 'NULL'; // 변경 예정
		
		const param = [host , name, category, image, auth_cycle, auth_description, start_date, duration, point_info_list];;
		data.routine.add(param);
		
		const routine_id = data.routine.get('host', host).id// 만약 routine 이름이 중복 가능일 경우 변경 필요
		const type = 'join';
		
		const param2 = [host, routine_id, type];
		data.user_routine.add(param2);
		
		return res.json({
			routine : param,
			msg : "루틴 개설 완료!"
		})
	},
	
	output : async (req, res) => {
		const routineId = req.params.routineId;
		
		const param = await data.routine.get('id', routineId);
		
		res.json({
			routine_id : routineId,
			routine : param
		})
	}
}

module.exports = {
	routine
}