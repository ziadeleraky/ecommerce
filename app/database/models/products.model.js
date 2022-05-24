const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
   catagory: {
      type: String,
      trim: true,
      enum: ["man", "woman", "kids"],
      required: true,
      lowercase: true,
   },
   sub: {
      type: String,
      trim: true,
      enum: ["tshirt", "jeans", "dress"],
      required: true,
      lowercase: true,
   },
   productTitle: {
      type: String,
      trim: true,
      required: true,
   },
   productContent: {
      type: String,
      trim: true,
   },
   productPrice: {
      type: Number,
      trim: true,
      required: true,
   },
   productSize: {
      type: String,
      trim: true,
      enum: ["m", "l", "xl"],
      required: true,
      lowercase: true,
   },
});


userSchema.pre("save", async function () {
   const user = this;
});

const admin = mongoose.model("Admin", adminSchema);
module.exports = admin;
