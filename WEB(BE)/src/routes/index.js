const express = require("express");
const router = express.Router();
const ctrl = require('../controllers/home.ctrl');
const jwt = require('../token/jwt');

const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");


router.get('/', ctrl.page.showHome);


router.use('/login', login);
router.use('/signup', signup);
router.use('/logout', logout);



module.exports = router;