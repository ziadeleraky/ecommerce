const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = mongoose.Schema(
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
         required: true,
         min: 10,
         max: 100,
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
               street: { type: String, trim: true },
               region: { type: String, trim: true },
               city: { type: String, trim: true },
               country: { type: String, trim: true },
            },
         },
      ],
      profileImage: { type: String, trim: true },
      status: {
         type: Boolean,
         default: false,
      },
   },
   {
      timestamps: true,
   }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
