const express = require("express");
const router = express.Router();
const ctrl = require('../controllers/signup.ctrl');


router.get('/', function(req, res){
	res.render('signup');
})

router.post('/', ctrl.registUser);


module.exports = router;

