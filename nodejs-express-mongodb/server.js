const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const productroute = require('./app/config/routes/product.route');
const purchaseroute = require('./app/config/routes/purchases.route');


const corsOptions = {
  origin: "*",
  methods: ["GET","POST"],
  optionsSuccessStatus: 200
};



//var path = require('path');
//mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/inventory',{
  useNewUrlParser:true,
  useUnifiedTopology:true
}) 
.then(() => {
  console.log("Connected to the database!");
})
.catch(err => {
  console.log("Cannot connect to the database!", err);
  process.exit();
});
//const dbConn = mongoose.connect('mongodb://localhost:27017/inventory');

//(err) => {
  //if(err) {
     // console.log(err);
      //res.sendStatus(500);
      //return;
    //} 
  //else 
  //{
    //  console.log('connected to mongodb');
  //}
//});

app.use(cors(corsOptions));
app.use('/product',productroute);
app.use('/purchase',purchaseroute);


app.use((req,res,next)=>{
  
    const err = new Error("not found");
    err.status(404);
    next(err);
  
});


app.use((err,req,res,next)=>{
  res.status(err.status || 500)
  res.send({
    error:{
      status:err.status || 500,
      message: err.message
    }
  });
});



//app.use(cors(corsOptions));


//app.use(bodyParser.json());


//app.use(bodyParser.urlencoded({ extended: true }));

//const db = require("./app/models");
//db.mongoose
  //.connect(db.url, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true
  //})
  //.then(() => {
    //console.log("Connected to the database!");
  //})
  //.catch(err => {
    //console.log("Cannot connect to the database!", err);
    //process.exit();
  //});




//require("./app/routes/product.routes")(app);
const PORT=process.env.PORT || 5000;



app.listen(PORT, function()  {
  console.log(`Server is running on port ${PORT}.`);
});
