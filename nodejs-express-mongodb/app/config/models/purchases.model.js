
const mongoose = require("mongoose");
const  Schema  = mongoose.Schema;
const purchaseSchema = new Schema(
        {
          id: {
            type:String,
          },
          Supplierid: {
            type: mongoose.Schema.Types.ObjectId,
             ref: 'vendor'
          },
          Productid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products'
          },

          PurchaseDate: {
            type:Date,
          } 
          
        }

    )
    const purchase = mongoose.model('purchases',purchaseSchema);
    module.exports = purchase;
  