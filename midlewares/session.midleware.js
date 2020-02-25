let db=require('../db')
const shortid=require('shortid')
module.exports=(req,res,next)=>{
    if(!req.signedCookies.sessionId){
        const sessionId=shortid.generate()
        res.cookie('sessionId',
        sessionId
        ,{
            signed: true
        })
        db.get('sessionId').push({
            id: sessionId
        }).write()
    }
    next()
}