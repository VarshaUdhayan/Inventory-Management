const express = require("express");

const router = express.Router();
const vendor = require('../models/vendors.model');



router.get('/',async(req,res,next)=>
{
   try{
       const result= await vendor.find({},{ id: 1, vendorname: 1})
       if(result){
           //console.log(result);
           //res.send(result);
            return res.status(200).json(result);
       }
       res.status(404).json({ message: "vendor not found"})
   }
   catch(error)
   {
    res.send(error.message); 
   }
    //res.send("getting list of products");
});

router.post('/',(req,res,next)=>{
    res.send("created");
})
module.exports= router;