var express = require("express");
var router = express.Router();


var controller=require('../controllers/tranfer.controller')
var cookieParser = require('cookie-parser')
var csrf = require('csurf')
var bodyParser = require('body-parser')
 
// setup route middlewares
var csrfProtection = csrf({ cookie: true })
var parseForm = bodyParser.urlencoded({ extended: false })
 
// create express app
var app = express()


router.get("/create",csrfProtection,controller.create);
router.post('/create',parseForm,csrfProtection,controller.postCreate)
module.exports=router