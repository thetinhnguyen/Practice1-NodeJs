var mongoose=require('mongoose')
var productSchema=new mongoose.Schema({
    id: String,
    name: String,
    image: String,
    description: String
})
var products=mongoose.model('User',productSchema,'products')
module.exports=products