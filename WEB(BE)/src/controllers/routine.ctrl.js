const data = require('../models/index');
const jwt = require('../token/jwt');
const multer = require("multer");
const path = require("path");
const maxStep = 5;

var storage = multer.diskStorage({
	dsetination: function(req, file, cb){
		cb(null, "public/images/");
	},
	filename: function(req, file, cb){
		const ext = path.extname(file.originalname);
		cb(null, path.basename(file.originalname, ext) + "-" + Date.now() + ext);
	},
});

var upload = multer({storage: storage});

const page = {
	goHome : (req, res) =>{
		res.redirect('/');
	},
	
	showMakingRoutine : (req, res) =>{
		res.render('MakingRoutine');
	}
}

const user = {
	isToken : (req, res) => {
		if(req.cookies.token){
			return true;
		}
		
		else{
			return false;
		}
	},
	
	getId : (token) => {
		if(!token){
			return;
		}
		
		const decode = jwt.token.decode(token);
		
		return decode.id;
	}
}

const routine = {
	make : (req, res) =>{
		if(!user.isToken){
			return res.render('alert', {error: '로그인을 해주세요!'});
		}
		
		upload.single("image");
		
		var auth_description_list = [req.body.auth_description_1, req.body.auth_description_2, req.body.auth_description_3, req.body.auth_description_4, req.body.auth_description_5];
		
		let i = 0;
		for(const item of auth_description_list){
			if(!item){
				auth_description_list.length = i;
				break;
			}
			i++;
		}
		
		const creator_id = user.getId(req.cookies.token);
		const title = req.body.name;
		const category = req.body.category;
		const image = `/images/${req.body.photo}`;
		const auth_cycle = req.body.auth_cycle;
		const auth_description = JSON.stringify(auth_description_list);
		const start_date = req.body.start_date;
		const duration = req.body.duration;
		const participants = 1; // 변경 예정
		const point_info_list = 'NULL'; // 변경 예정
		
		var param = [creator_id , title, category, image, auth_cycle, auth_description, start_date, duration, participants, point_info_list];;
		data.routine.add(param);
		
		page.goHome(req, res);
	}
}

module.exports = {
	page,
	routine
}