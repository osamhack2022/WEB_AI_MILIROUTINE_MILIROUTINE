const express = require("express");
const router = express.Router();
const ctrl = require('../controllers/signup.ctrl');


router.get('/', ctrl.page.showSignup);

router.post('/', ctrl.user.regist);

router.get('/more/:userId', ctrl.page.showSignmore);

router.post('/more', ctrl.user.addInfo);

module.exports = router;

