require('dotenv').config()
const express = require("express");

let db=require('./db')

const userRoute=require('./routes/user.route')
const authRoute=require('./routes/auth.route')
const productsRoute=require('./routes/products.route')
const cartRoute=require('./routes/cart.route')
const tranferRoute=require('./routes/tranfer.route')



const cookieParser = require('cookie-parser')
// var csrf = require('csurf')
// var bodyParser = require('body-parser')
// var csrfProtection = csrf({ cookie: true })

var mongoose = require('mongoose');
mongoose.connect(process.env.NAME_DATABASE, {useNewUrlParser: true});

const midleware=require('./midlewares/auth.midleware')
const sessionMidleware=require('./midlewares/session.midleware')

const app = express();
const port = 3000;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(cookieParser(process.env.SESSION_SECRET))
app.use(sessionMidleware) // app dung session cho tat ca cac route

app.set("view engine", "pug");
app.set("views", "./views");
app.get("/", (req, res) => {
  console.log(req.cookies.userID)
  res.render("index");
});
app.get('/cookie',(req,res,next)=>{
  res.cookie('userID',12345)
  res.send('Hello')
})
app.use('/users',midleware.authMiddleware,userRoute)
app.use('/auth',authRoute)
app.use('/products',productsRoute)
app.use('/cart',cartRoute)
app.use('/tranfer',midleware.authMiddleware,tranferRoute)
app.use(express.static('public'))
app.listen(port, () => {
  console.log(`Example app listening on ${port} `);
});
