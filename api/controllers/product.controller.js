
var Product=require('../../models/product.model')
module.exports.pagination=(req,res,next)=>{
    Product.find().then((products)=>{
        res.json(products)
    })
   
}