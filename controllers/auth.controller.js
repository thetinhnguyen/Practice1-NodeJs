let db=require('../db')

module.exports.login=(req,res,next)=>{
    res.render('auth/login')
}
module.exports.postLogin=(req,res,next)=>{
    const {email,password}=req.body
    console.log(req.body)
    console.log(db.get('users').value())
    let user=db.get('users').find({ email }).value()
    let errors=[]
    if(!user){
        errors.push('User does not exits')
        res.render('auth/login',{
            errors,
            values: req.body
        })
        return 
    }
    if(password!==user.password){
        errors.push('Password is wrong')
        res.render('auth/login',{
            errors,
            values: req.body
        })
        return 
    }
    res.cookie('userID',user.id)
    res.redirect('/users')
}