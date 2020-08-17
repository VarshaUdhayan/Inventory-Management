const mongoose = require("mongoose");
const  Schema = mongoose.Schema;



    const ProductSchema = new Schema({
        id : {
          type: String,
        },
        productname: {
          type: String,
        },
         price_per_unit : {
            type: Number,
          },

          quantity : {
              type: Number,
          }
      }

    );
   const product=mongoose.model('products',ProductSchema);
   module.exports= product;
  