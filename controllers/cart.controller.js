let db=require('../db')
module.exports.addToCart=(req,res)=>{
    const {productId}=req.params
    const {sessionId}=req.signedCookies
    const count= db.get('sessionId').find({
        id: sessionId
    })
    .get('cart.'+productId,0)
    .value()
    db.get('sessionId').find({
        id: sessionId
    })
    .set('cart.'+productId,count+1)
    .write()
    res.redirect('/products')
}