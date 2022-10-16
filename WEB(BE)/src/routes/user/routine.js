const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/user.ctrl");

router.get('/:routineId/auth', ctrl.output.auth);
router.post('/:routineId/auth', ctrl.routine.auth);

module.exports = router;