
const mongoose = require('mongoose');
const Schema=mongoose.Schema;

let Pizza=new Schema({
    name:{type:String},
    price:{type:Number},
    
},{
     collection:'pizzadb'
});

module.exports=mongoose.model("Pizza",Pizza);