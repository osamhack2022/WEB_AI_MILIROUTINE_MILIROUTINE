const data = require('../models/index');
const maxStep = 5;

const page = {
	goHome : (req, res) =>{
		res.redirect('/');
	},
	
	showMakingRoutine : (req, res) =>{
		res.render('MakingRoutine');
	}
}

const routine = {
	make : (req, res) =>{
		var auth_description_list = [req.body.auth_description_1, req.body.auth_description_2, req.body.auth_description_3, req.body.auth_description_4, req.body.auth_description_5];
		
		var param = [req.body.name, req.body.category, req.body.auth_cycle, JSON.stringify(auth_description_list), req.body.start_date, req.body.duration, 0, 'NULL'];
	}
}

module.exports = {
	page,
	routine
}