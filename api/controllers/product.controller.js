
var Product=require('../../models/product.model')
module.exports.pagination=(req,res,next)=>{
    Product.find().then((products)=>{
        res.json(products)
    })
   
}
module.exports.createProduct=(req,res)=>{
    Product.create({...req.body}).then(
        product=>res.json(product)
    )
}