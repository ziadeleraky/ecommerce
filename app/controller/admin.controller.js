const productModel = require('../database/models/products.model');
const path = require('path')
class admin {
   static add = async (req, res) => {
      try {
         const product = productModel(req.body);
         await product.save();
         res.status(200).send({
            apiStatus: true,
            data: product,
            message: 'Added Successfully'
         })
         await product.save();
      } catch (e) {
         res.status(500).send({
            apiStatus: false,
            data: e.message,
            message: 'Adding Product Error'
         })
      }
   }
}

module.exports = admin;