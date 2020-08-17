
const mongoose = require("mongoose");
const  schema  = mongoose.Schema;



    const orderSchema = new orderSchema(
        {
          id:Number,
          productid : Number,
          orderdate: Date,
          
        }

    )
    const order = mongoose.model('orders',' orderSchema')
    module.exports = order;