const express = require("express");

const router = express.Router();
const product = require('../models/products.model');



router.get('/',async(req,res,next)=>
{
   try{
       const result= await product.find({},{ id: 1, productname: 1, priceperunit: 1, quantity: 1})
       if(result){
           //console.log(result);
           //res.send(result);
            return res.status(200).json(result);
       }
       res.status(404).json({ message: "product not found"})
   }
   catch(error)
   {
    res.send(error.message); 
   }
    //res.send("getting list of products");
});

router.post('/',(req,res,next)=>{
    res.send("product created");
})
module.exports= router;


    