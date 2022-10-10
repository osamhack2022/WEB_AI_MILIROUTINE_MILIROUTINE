const express = require("express");
const router = express.Router();
const ctrl = require('../controllers/signup.ctrl');


router.get('/', ctrl.page.goSignup);

router.post('/', ctrl.user.regist);

router.get('/more/:userId', function(req, res){
	console.log("2차 회원가입 페이지")
});

router.post('/more', ctrl.user.addInfo);

module.exports = router;

