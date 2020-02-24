const express = require("express");

let db=require('./db')
const userRoute=require('./routes/user.route')
const app = express();
const port = 3000;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.set("view engine", "pug");
app.set("views", "./views");
app.get("/", (req, res) => {
  res.render("index");
});
app.use('/users',userRoute)
app.use(express.static('public'))
app.listen(port, () => {

  console.log(`Example app listening on ${port} `);
});
