const express=require('express')
const db=require('../db')
module.exports.pagination=(req,res,next)=>{
    const page=req.query.page || 1
    const perPage=6
    const listProducts=db.get("products").value()
 
    res.render('products/index',{
        products: listProducts.slice((page-1)*perPage,(page-1)*perPage+perPage),
        pageNumber: Math.ceil(listProducts.length/perPage)
    })
}