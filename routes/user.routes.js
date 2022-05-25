const router = require('express').Router();

const UserController = require('../app/controller/User.controller')

router.post('/addToChart',UserController.addToChart)
module.exports = router;