const express = require("express");
const router = express.Router();
const my = require('./user/my');
const settings = require('./user/settings');

router.use('/my', my);
router.use('/settings', settings);

module.exports = router;

