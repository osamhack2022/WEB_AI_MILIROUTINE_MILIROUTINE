const express = require("express");
const router = express.Router();
const ctrl = require('../controllers/routine.ctrl');


router.get('/', ctrl.page.showMakingRoutine);

router.post('/', ctrl.routine.make);

module.exports = router;