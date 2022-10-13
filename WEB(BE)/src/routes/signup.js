const express = require("express");
const router = express.Router();
const ctrl = require('../controllers/signup.ctrl');


router.post('/', ctrl.user.regist);

router.post('/more', ctrl.user.addInfo);

module.exports = router;

