const mongoose= require('mongoose')
const validator = require("validator");


const productSchema= new mongoose.Schema({
   title:{type:String,required:true,unique:true,trim:true},
   desc:{type:String,required:true,unique:true,trim:true},
   img:{type:String,required:true,trim:true},
   categories:{type:Array,required:true,trim:true},
   size:{type:String,required:true,trim:true},
   price:{type:String,required:true,trim:true},
   color:{type:Number,required:true,trim:true},

},
{timestamps:true}
);

const product=mongoose.model("product",productSchema)
module.exports=product