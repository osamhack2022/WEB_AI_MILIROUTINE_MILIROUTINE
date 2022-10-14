const express = require("express");
const router = express.Router();
const ctrl = require('../controllers/home.ctrl');

const signup = require("./signup");
const login = require("./login");
const routine = require("./routine");
const user = require("./user");

router.get('/', function(req, res){
	console.log("home");
});


router.use('/auth/login', login);
router.use('/auth/signup', signup);
router.use('/routine', routine);
router.use('/user', user);



module.exports = router;