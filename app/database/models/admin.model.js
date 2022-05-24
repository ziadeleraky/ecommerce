const mongoose = require("mongoose");
const validator = require("validator");

const adminSchema = mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
         trim: true,
      },
      email: {
         type: String,
         required: true,
         trim: true,
         lowercase: true,
         unique: [true, "This email is already used"],
         validate(value) {
            if (!validator.isEmail(value)) throw new Error("Invalid Email");
         },
      },
      password: {
         type: String,
         required: true,
         trim: true,
      },
      age: {
         type: Number,
         min: 14,
         max: 120,
      },
      gender: {
         type: String,
         trim: true,
         lowercase: true,
         enum: ["male", "female"],
      },
      phone: {
         type: String,
         trim: true,
         validate(value) {
            if (!validator.isMobilePhone(value, "ar-EG"))
               throw new Error("Invalid Mobile Number");
         },
      },
      addresses: [
         {
            address: {
               region: { type: String, trim: true },
               country: { type: String, trim: true },
               city: { type: String, trim: true },
               street: { type: String, trim: true },
            },
         },
      ],
      profileImage: { type: String, trim: true },
      status: {
         type: Boolean,
         default: false,
      },
      passcode: {
         type: String,
         required: true,
         enum: "ecommerce",
         validate(value) {
            if (value !== "ecommerce") {
               throw new Error("Invalid Passcode");
            }
         },
      },
   },
   {
      timestamps: true,
   }
);

const admin = mongoose.model("Admin", adminSchema);
module.exports = admin;
