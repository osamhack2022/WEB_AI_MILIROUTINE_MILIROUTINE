const express = require("express");
const router = express.Router();
const my = require('./user/my');

router.use('/my', my);

module.exports = router;

