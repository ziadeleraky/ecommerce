const router = require('express').Router();
const adminController = require('../app/controller/admin.controller')

router.post('/addProduct', adminController.add)
router.post('/register', adminController.register)


module.exports=router;