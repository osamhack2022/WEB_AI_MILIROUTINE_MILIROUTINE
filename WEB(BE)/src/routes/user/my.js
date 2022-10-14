const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/user.ctrl");

router.get('/', ctrl.output.mine);
router.get('/like', ctrl.output.like);

module.exports = router;

