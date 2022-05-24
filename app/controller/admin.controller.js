const productModel = require("../database/models/products.model");
const adminModel = require("../database/models/admin.model");

class admin {
   static add = async (req, res) => {
      try {
         const product = productModel(req.body);
         await product.save();
         res.status(200).send({
            apiStatus: true,
            data: product,
            message: "Added Successfully",
         });
         await product.save();
      } catch (e) {
         res.status(500).send({
            apiStatus: false,
            data: e.message,
            message: "Adding Product Error",
         });
      }
   };
   static register = async (req, res) => {
      try {
         const admin = adminModel(req.body);
         await admin.save();
         res.status(200).send({
            apiStatus: true,
            data: admin,
            message: "Admin Registered Successfully",
         });
      } catch (e) {
         res.status(500).send({
            apiStatus: false,
            data: e.message,
            message: "Admin Registration Error",
         });
      }
   };
}

module.exports = admin;
