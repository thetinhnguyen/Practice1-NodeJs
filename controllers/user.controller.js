let db=require('../db')
module.exports.index=(req, res) => {
    res.render("users", {
      users: db.get("users").value(),
      ques: ""
    });
  }
module.exports.search=(req, res) => {
    const q = req.query.q;
    let usersSearch = [];
    const users = db
      .get("users")
      .values()
      .write();
    usersSearch = users.filter(
      user => user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
    );
    res.render("users", {
      users: usersSearch,
      ques: q
    });
  }
  module.exports.create=(req, res) => {
    res.render("users/create", {});
  }
  module.exports.searchID=(req, res) => {
    const id = parseInt(req.params.id);
    const user = db
      .get("users")
      .find({ id })
      .value();
    res.render("users/view", {
      user
    });
  }
  module.exports.createPost=(req,res)=>{
    db.get('users').push({...req.body,id: db.get('users').value().length+1}).write()
    res.redirect('/users')
}