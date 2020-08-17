const express = require("express");

const router = express.Router();
const purchase = require('../models/purchases.model');



router.get('/',async(req,res,next)=>
{
   try{
       const result= await purchase.find({},
        { 
            id: 1,
            Supplierid: 1, 
            Productid: 1, 
            PurchaseDate: 1
        }).populate('Productid')
         if(result)
            {
           //console.log(result);
            return res.status(200).json(result);
            }
       res.status(404).json({ message: "purchase not found"})
   }
   catch(error)
   {
    res.send(error.message); 
   }
    //res.send("getting list of purchases");
});

router.post('/',(req,res,next)=>{
    res.send("purchase created");
})
module.exports= router;
//const person = await Person.findOne({
   // name: "John",
//}).populate("address", { street: 1, zipCode: 1 })