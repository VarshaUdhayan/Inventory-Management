const mongoose = require("mongoose");
const  Schema = mongoose.Schema;



    const vendorSchema = new Schema({
        id : {
          type: String,
        },
        vendorname: 
        {
          type: String,
        }
         
      }

    );
   const vendor=mongoose.model('vendors',vendorSchema);
   module.exports = vendor;
  