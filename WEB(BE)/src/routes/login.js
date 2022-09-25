const express = require("express");
const router = express.Router();
const session = require('express-session');
const ctrl = require('../controllers/login.ctrl');


router.get('/', function(req, res){
	if(req.session.user){
		return res.render('alert', {error: '이미 로그인 되어있습니다!'});
	}
	else{
		res.render('login');
	}
	
})

router.post('/', function(req, res){
	if(req.session.user){
		return res.render('alert', {error: '이미 로그인 되어있습니다!'});
	}
	else{
		ctrl.checkUserID(req, res);
	}
});


module.exports = router;