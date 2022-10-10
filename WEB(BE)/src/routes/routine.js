const express = require("express");
const router = express.Router();
const ctrl = require('../controllers/routine.ctrl');
const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, "public/images/");
	},
	
	filename: function(req, file, cb){
		const ext = path.extname(file.originalname);
		cb(null, path.basename(file.originalname, ext) + "-" + Date.now() + ext);
	}
});

var upload = multer({storage: storage});

router.get('/', ctrl.routine.make);

router.post('/', upload.single("image"), ctrl.routine.make);

module.exports = router;