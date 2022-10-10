const express = require("express");
const router = express.Router();
const ctrl = require('../controllers/login.ctrl');


router.get('/', function(req, res){
	console.log("login page");
});

router.post('/', ctrl.user.checkUserInfo);

module.exports = router;