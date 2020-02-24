let db=require('../db')
module.exports.authMiddleware=(req,res,next)=>{
    const {userID}=req.signedCookies;
    if(!userID){
        res.redirect('/auth/login')
        return
    }
    const user=db.get('users').find({id: parseInt(userID)}).value()
    if(!user){
        res.redirect('/auth/login')
        return
    }
    res.locals.user=user
    next()
}