const express = require("express");
const router = express.Router();

const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");


router.get('/', function(req, res){
	if(req.session.user !== undefined){
		res.send('로그인 되었네요');
	}
	else{
		res.render('index');
	}
})


router.use('/login', login);
router.use('/signup', signup);
router.use('/logout', logout);

module.exports = router;