const mongoose= require('mongoose')
const validator = require("validator");


const cartSchema= new mongoose.Schema({
   userId:{type:String,required:true,unique:true,trim:true},
   products:[{
       productId:{type:String},
       quantity:{type:Number,default:1},
   }]

},
{timestamps:true}
);

const cart=mongoose.model("cart",cartSchema)
module.exports=cart