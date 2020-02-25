
let db=require('../db')
module.exports.create=(req,res)=>{
    res.render('./tranfer/index',{ csrfToken: req.csrfToken() })

}
module.exports.postCreate=(req,res)=>{
    db.get('tranfer').push({
        ...req.body,
        userID: req.signedCookies.userID
    }).write()
    res.redirect('/tranfer/create')
}