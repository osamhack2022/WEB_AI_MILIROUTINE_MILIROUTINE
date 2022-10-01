const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/logout.ctrl");

router.get('/', ctrl.user.destroy);

module.exports = router;
