const express = require("express");
const router = express.Router();
const ctrl = require('../controllers/login.ctrl');


router.post('/', ctrl.user.checkUserInfo);

module.exports = router;