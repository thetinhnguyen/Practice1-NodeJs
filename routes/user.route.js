var express = require("express");
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: './public/uploads/' })

var validate=require('../validate/user.valuidate')
var controller=require('../controllers/user.controller')

router.get("/", controller.index);
router.get("/search", controller.search);
router.get("/create", controller.create);
router.get("/:id", controller.searchID);
router.post('/create',upload.single('avatar'),validate.postCreate,controller.createPost)
module.exports=router
