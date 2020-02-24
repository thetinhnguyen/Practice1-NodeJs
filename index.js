const express = require("express");

let db=require('./db')
const userRoute=require('./routes/user.route')
const authRoute=require('./routes/auth.route')
const cookieParser = require('cookie-parser')
const midleware=require('./midlewares/auth.midleware')

const app = express();
const port = 3000;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(cookieParser('abshasqyhsaajbsajbsajsbagsb'))

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
app.use(express.static('public'))
app.listen(port, () => {

  console.log(`Example app listening on ${port} `);
});
