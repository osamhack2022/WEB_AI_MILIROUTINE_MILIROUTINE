const express = require("express");
const router = express.Router();

router.get('/', function(req, res){
	if(req.session){
		req.session.destroy(err => {if(err) console.log(err)});
		return res.render('alert', {error: '로그아웃 되었습니다!'});
	}
	
	res.redirect('/');
});

module.exports = router;
