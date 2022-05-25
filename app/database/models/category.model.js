const mongoose = require("mongoose");
const validator = require("validator");

const categorySchema = mongoose.Schema({
    category: {
       type: String,
       trim: true,
       enum: ["man", "woman", "kids"],
       required: true,
       lowercase: true,
       catId:Number,
    },
    subCategory: {
       type: String,
       trim: true,
       enum: ["Tshirt", "Jeans", "Blezer","Short","Trousers","SweatPants","Jacket"],
       //enum1:["Dress","Blouse","Tunic","Skirt","Legging","Trousers","SweatPants","Jeans"],
       //enum2:["Jumpsuit","Babysuit","Jeans","Trousers","Tshirt","Newborn"],
       required: true,
       lowercase: true,
       parent:Number,
       _id:Number
    },
   
})

const User = mongoose.model("category", categorySchema);
module.exports = User;