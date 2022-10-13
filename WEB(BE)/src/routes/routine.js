const express = require("express");
const router = express.Router();
const ctrl = require('../controllers/routine.ctrl');

router.post('/make', ctrl.routine.make);

router.get('/:routineId', ctrl.routine.output);

module.exports = router;