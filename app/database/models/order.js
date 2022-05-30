const mongoose= require('mongoose')
const validator = require("validator");


const orderSchema= new mongoose.Schema({
   userId:{type:String,required:true,unique:true,trim:true},
   products:[{
       productId:{type:String},
       quantity:{type:Number,default:1},
   }],
   amount:{type:Number,required:true},
   address:{type:Object,required:true,trim:true},
   status:{type:String,default:"pending"}

},
{timestamps:true}
);

const order=mongoose.model("cart",orderSchema)
module.exports=order