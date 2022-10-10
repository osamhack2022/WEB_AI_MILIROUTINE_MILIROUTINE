const express = require("express");
const router = express.Router();
const ctrl = require('../controllers/home.ctrl');

const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const routine = require("./routine");


router.get('/', function(req, res){
	console.log("home page");
});


router.use('/login', login);
router.use('/signup', signup);
router.use('/logout', logout);
router.use('/make', routine);



module.exports = router;